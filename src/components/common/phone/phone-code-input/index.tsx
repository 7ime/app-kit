import * as React from 'react'
import InputAdornment from '@material-ui/core/InputAdornment'
import classnames from 'classnames'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import Input from '@components/ui/textfield/components/input'

interface IProps extends IParentClass {}

const PhoneCode = (props: IProps) => {
    const {
        parentClass
    } = props

    const classNames = classnames(
        css.phoneCode,
        parentClass
    )

    return (
        <div className={classNames}>
            <Input
                label={'Code'}
                inputProps={{
                    maxLength: 3
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position={'start'}>
                            <div className={css.sign}>+</div>
                        </InputAdornment>
                    )
                }}
            />
        </div>
    )
}

export default PhoneCode
