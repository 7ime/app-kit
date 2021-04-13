import * as React from 'react'
import classnames from 'classnames'
import {useTranslation} from 'react-i18next'
import css from './index.module.scss'
import {transformCountriesToSelectOptions} from '@helpers/select/transform-countries-to-select-options'
import Select from '@components/ui/select/components/select'
import {IParentClass} from '@models/shared'
import ISelect from '@components/ui/select/model'
import {IPhoneNumber} from '@modules/phone-number/model'
import {IFieldValidationStatus} from '@models/field-validation-status'
import {sortByAlphaOrder} from '@helpers/sorts/sort-by-alpha-order'
import PhoneSelectCountryOption from '@components/common/phone/phone-select-country-option'
import PhoneSelectCountryValueContainer from '@components/common/phone/phone-select-country-value-container'

interface IProps extends IFieldValidationStatus, IParentClass {
    label: string
    name: string
    value: IPhoneNumber.CountryCode | null
    onChange(option: ISelect.Option | null): void
}

const PhoneSelectCountry = (props: IProps) => {
    const {
        label,
        name,
        value,
        onChange,
        success,
        successMessage,
        error,
        errorMessage,
        parentClass,
    } = props

    const {t} = useTranslation('countries')

    const countries: Record<string, string> = t('countries:data', { returnObjects: true })
    const countriesOptions = React.useMemo(() => {
        return sortByAlphaOrder(transformCountriesToSelectOptions(countries), 'label')
    }, [])

    const classNames = classnames(
        css.phoneSelectCountry,
        parentClass
    )

    return (
        <div className={classNames}>
            <Select label={label}
                    name={name}
                    value={value}
                    onChange={onChange}
                    options={countriesOptions}
                    error={error}
                    errorMessage={errorMessage}
                    success={success}
                    successMessage={successMessage}
                    components={{Option: PhoneSelectCountryOption, ValueContainer: PhoneSelectCountryValueContainer}}
            />
        </div>
    )
}

export default PhoneSelectCountry
