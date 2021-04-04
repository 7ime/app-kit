import * as React from 'react'
import InputAdornment from '@material-ui/core/InputAdornment'
import {InputBaseProps} from '@material-ui/core'
import classnames from 'classnames'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import Input from '@components/ui/textfield/components/input'

interface IProps extends IParentClass {
    label: string
    value: string
    onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

const PhoneCallingCode = (props: IProps) => {
    const {
        label,
        value,
        onChange,
        parentClass
    } = props

    const [isFocused, setFocus] = React.useState(false)

    const InputProps: InputBaseProps = {}

    if (isFocused || value) {
        InputProps.startAdornment = (
            <InputAdornment position={'start'}>
                <div className={css.sign}>+</div>
            </InputAdornment>
        )
    }

    const classNames = classnames(
        css.phoneCallingCode,
        parentClass
    )

    return (
        <div className={classNames}>
            <Input
                value={value}
                onChange={onChange}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                label={label}
                InputProps={InputProps}
                inputProps={{
                    maxLength: 3
                }}
            />
        </div>
    )
}

export default PhoneCallingCode
