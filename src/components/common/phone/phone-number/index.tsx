import * as React from 'react'
import classnames from 'classnames'
import NumberFormat, {NumberFormatValues} from 'react-number-format'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import Input from '@components/ui/textfield/components/input'
import {IFieldValidationStatus} from '@models/field-validation-status'
import {IPhoneNumber} from '@modules/phone-number/model'
import phoneNumber from '@modules/phone-number'

interface IProps extends IFieldValidationStatus, IParentClass {
    countryCode: IPhoneNumber.CountryCode | null
    label: string
    onValueChange(values: NumberFormatValues): void
}

const PhoneNumber = (props: IProps) => {
    const {
        countryCode,
        label,
        onValueChange,
        success,
        successMessage,
        error,
        errorMessage,
        parentClass,
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
                label={label}
                onValueChange={onValueChange}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                success={success}
                successMessage={successMessage}
                error={error}
                errorMessage={errorMessage}
                allowEmptyFormatting={isFocused}
                autoComplete="off"
                type="tel"
                customInput={Input}
                format={format}
                mask="-"
            />
        </div>
    )
}

export default PhoneNumber
