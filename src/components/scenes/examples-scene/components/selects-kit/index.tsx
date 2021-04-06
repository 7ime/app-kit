import * as React from 'react'
import css from './index.module.scss'
import cssUiKit from '../ui-kit/index.module.scss'
import Select from '@components/ui/select/components/select'
import ISelect from '@components/ui/select/model'

const options: ISelect.Option[] = [
    {
        label: 'Option 1',
        value: '1'
    },
    {
        label: 'Option 2',
        value: '2'
    },
    {
        label: 'Option 3',
        value: '3'
    },
    {
        label: 'Option 4',
        value: '4'
    },
    {
        label: 'Option 5',
        value: '5'
    }
]

const SelectsKit = () => {
    return (
        <div className={css.selectsKit}>
            <div className={cssUiKit.title}>Selects:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Default:</span>
                    <Select label={'Select Option'} options={options} parentClass={css.select} />
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Success:</span>
                    <Select label={'Select Option'} options={options} parentClass={css.select} success successMessage={'Test message'}/>
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Error:</span>
                    <Select label={'Select Option'} options={options} parentClass={css.select} error errorMessage={'Test message'}/>
                </div>
            </div>
        </div>
    )
}

export default SelectsKit
