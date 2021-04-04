import * as React from 'react'
import classnames from 'classnames'
import {useTranslation} from 'react-i18next'
import css from './index.module.scss'
import {transformCountriesToSelectOptions} from '@helpers/select-options/transform-countries-to-select-options'
import Select from '@components/ui/select/components/select'
import PhoneSelectOption from '@components/common/phone/phone-select-option'
import {IParentClass} from '@models/shared'
import PhoneSelectValueContainer from '@components/common/phone/phone-select-value-container'
import ISelect from '@components/ui/select/model'
import {IPhoneNumber} from '@modules/phone-number/model'
import {IFieldValidationStatus} from '@models/field-validation-status'

interface IProps extends IParentClass, IFieldValidationStatus {
    label: string
    name: string
    countryCode: IPhoneNumber.CountryCode | null
    onChange(option: ISelect.Option | null): void
}

const getValueOption = (
    value: string | null, options: ISelect.Option[],
): ISelect.Option | null => {
    if (value === null) return null

    return options.find((item) => item.value === value) || null
}

const PhoneSelect = (props: IProps) => {
    const {
        label,
        name,
        parentClass,
        onChange,
        countryCode,
        success,
        successMessage,
        error,
        errorMessage
    } = props

    const {t} = useTranslation()
    const countries = t<Record<string, string>>('countries:data', { returnObjects: true })
    const countriesOptions = React.useMemo(() => transformCountriesToSelectOptions(countries), [])

    const [valueOption, setValueOption] = React.useState(getValueOption(null, countriesOptions))

    React.useEffect(() => {
        setValueOption(getValueOption(countryCode, countriesOptions))
    }, [countryCode, countriesOptions])

    const classNames = classnames(
        css.phoneSelect,
        parentClass
    )

    return (
        <div className={classNames}>
            <Select label={label}
                    name={name}
                    value={valueOption}
                    onChange={onChange}
                    options={countriesOptions}
                    components={{Option: PhoneSelectOption, ValueContainer: PhoneSelectValueContainer}}
                    error={error}
                    errorMessage={errorMessage}
                    success={success}
                    successMessage={successMessage}
            />
        </div>
    )
}

export default PhoneSelect
