import * as React from 'react'
import classnames from 'classnames'
import NumberFormat from 'react-number-format'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import Input from '@components/ui/textfield/components/input'

interface IProps extends IParentClass {}

const PhoneNumber = (props: IProps) => {
    const {
        parentClass
    } = props

    const classNames = classnames(
        css.phoneNumber,
        parentClass
    )

    const [isFocused, setFocus] = React.useState(false)

    return (
        <div className={classNames}>
            <NumberFormat
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                allowEmptyFormatting={isFocused}
                autoComplete="off"
                type="tel"
                label={'Phone number'}
                customInput={Input}
                format="## ### ####"
                mask="-"
            />
        </div>
    )
}

export default PhoneNumber
