import * as React from 'react'
import classnames from 'classnames'
import css from './index.module.scss'
import {SelectComponents} from 'react-select/src/components'
import ISelect from '@components/ui/select/model'
import phoneNumber from '@modules/phone-number'

const PhoneSelectCountryOption: SelectComponents<ISelect.Option, false>['Option'] = (props) => {
    const {
        innerProps,
        data,
        isFocused,
        isSelected
    } = props

    const code = React.useMemo(() => phoneNumber.getCountryCallingCode(data.value), [])

    const classNames = classnames(
        css.phoneSelectCountryOption,
        {[css.is_focused]: isFocused},
        {[css.is_selected]: isSelected},
    )

    return (
        <div className={classNames} {...innerProps}>
            <div className={css.name}>{data.label}</div>
            <div className={css.code}>+{code}</div>
        </div>
    )
}

export default PhoneSelectCountryOption
