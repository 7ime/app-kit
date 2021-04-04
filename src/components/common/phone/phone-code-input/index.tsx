import * as React from 'react'
import InputAdornment from '@material-ui/core/InputAdornment'
import {InputBaseProps} from '@material-ui/core'
import classnames from 'classnames'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import Input from '@components/ui/textfield/components/input'

interface IProps extends IParentClass {
    value: string
    onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

const PhoneCode = (props: IProps) => {
    const {
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
        css.phoneCode,
        parentClass
    )

    return (
        <div className={classNames}>
            <Input
                value={value}
                onChange={onChange}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                label={'Code'}
                inputProps={{
                    maxLength: 3
                }}
                InputProps={InputProps}
            />
        </div>
    )
}

export default PhoneCode
