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
import {sortByAlphaOrder} from '@helpers/sorts/sort-by-alpha-order'

interface IProps extends IFieldValidationStatus, IParentClass {
    label: string
    name: string
    value: IPhoneNumber.CountryCode | null
    onChange(option: ISelect.Option | null): void
}

const PhoneSelect = (props: IProps) => {
    const {
        label,
        name,
        parentClass,
        onChange,
        value,
        success,
        successMessage,
        error,
        errorMessage
    } = props

    const {t} = useTranslation()

    const countries = t<Record<string, string>>('countries:data', { returnObjects: true })
    const countriesOptions = React.useMemo(() => {
        return sortByAlphaOrder(transformCountriesToSelectOptions(countries), 'label')
    }, [])

    const classNames = classnames(
        css.phoneSelect,
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
                    components={{Option: PhoneSelectOption, ValueContainer: PhoneSelectValueContainer}}
            />
        </div>
    )
}

export default PhoneSelect
