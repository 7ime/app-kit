import * as React from 'react'
import classnames from 'classnames'
import ReactSelect from 'react-select'
import css from '../../styles/select.module.scss'
import ISelect from '../../model'
import ValidationMessage from '@components/ui/validation-message/components/validation-message'

const Select = (props: ISelect.Props) => {
    const {
        label,
        name,
        onChange,
        options,
        parentClass,
        value: externalValue,
        components,
        success,
        successMessage,
        error,
        errorMessage
    } = props

    const [value, setValue] = React.useState<ISelect.Option | null>(externalValue ? externalValue : null)
    const [focused, setFocused] = React.useState(false)

    React.useEffect(() => {
        setValue(externalValue ? externalValue : null)
    }, [externalValue])

    const handleChange = (option: ISelect.Option | null) => {
        setValue(option)
        onChange && onChange(option)
    }

    const classNames = classnames(
        css.select,
        {[css.is_selected]: !!value},
        {[css.is_focused]: focused},
        {[css.is_error]: error},
        {[css.is_success]: success},
        parentClass
    )

    return (
        <div className={classNames}>
            <div className={css.label}>{label}</div>
            <ReactSelect
                name={name}
                options={options}
                noOptionsMessage={() => 'Not found'}
                classNamePrefix="Select"
                value={value}
                onChange={handleChange}
                components={components}
                onMenuOpen={() => setFocused(true)}
                onMenuClose={() => setFocused(false)}
            />

            {success && successMessage && (
                <ValidationMessage type={'success'} parentClass={css.validationMessage}>{successMessage}</ValidationMessage>
            )}

            {error && errorMessage && (
                <ValidationMessage type={'error'} parentClass={css.validationMessage}>{errorMessage}</ValidationMessage>
            )}
        </div>
    )
}

export default React.memo(Select)
