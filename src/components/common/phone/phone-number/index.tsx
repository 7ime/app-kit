import * as React from 'react'
import classnames from 'classnames'
import NumberFormat from 'react-number-format'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import Input from '@components/ui/textfield/components/input'
import {IPhoneNumber} from '@modules/phone-number/model'
import phoneNumber from '@modules/phone-number'

interface IProps extends IParentClass {
    countryCode: IPhoneNumber.CountryCode | null
}

const PhoneNumber = (props: IProps) => {
    const {
        parentClass,
        countryCode,
    } = props

    const classNames = classnames(
        css.phoneNumber,
        parentClass
    )

    const [isFocused, setFocus] = React.useState(false)

    const format = countryCode ? phoneNumber.getCountryPhoneMask(countryCode)?.internationalShort : undefined

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
                format={format}
                mask="-"
            />
        </div>
    )
}

export default PhoneNumber
