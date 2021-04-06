import * as React from 'react'
import css from './index.module.scss'
import cssUiKit from '../ui-kit/index.module.scss'
import Radio from '@components/ui/radios/components/radio'
import RadioGroup from '@components/ui/radios/components/radio-group'

const RadiosKit = () => {
    const [value, setValue] = React.useState('+')

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    return (
        <div className={css.radiosKit}>
            <div className={cssUiKit.title}>Radio Groups:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Default:</span>
                    <RadioGroup value={value} onChange={handleChange} name={'primary'}>
                        <Radio value={'+'}>Plus</Radio>
                        <Radio value={'/'}>Divided by</Radio>
                        <Radio value={'*'}>Times</Radio>
                        <Radio value={'-'}>Minus</Radio>
                    </RadioGroup>
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Primary:</span>
                    <RadioGroup value={value} onChange={handleChange} name={'primary'}>
                        <Radio value={'+'} type={'primary'}>Plus</Radio>
                        <Radio value={'/'} type={'primary'}>Divided by</Radio>
                        <Radio value={'*'} type={'primary'}>Times</Radio>
                        <Radio value={'-'} type={'primary'}>Minus</Radio>
                    </RadioGroup>
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Secondary:</span>
                    <RadioGroup value={value} onChange={handleChange} name={'secondary'}>
                        <Radio value={'+'} type={'primary'}>Plus</Radio>
                        <Radio value={'/'} type={'primary'}>Divided by</Radio>
                        <Radio value={'*'} type={'primary'}>Times</Radio>
                        <Radio value={'-'} type={'primary'}>Minus</Radio>
                    </RadioGroup>
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Success:</span>
                    <RadioGroup value={value} onChange={handleChange} name={'success'} success successMessage={'test success message'}>
                        <Radio value={'+'} type={'primary'}>Plus</Radio>
                        <Radio value={'/'} type={'primary'}>Divided by</Radio>
                        <Radio value={'*'} type={'primary'}>Times</Radio>
                        <Radio value={'-'} type={'primary'}>Minus</Radio>
                    </RadioGroup>
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Error:</span>
                    <RadioGroup value={value} onChange={handleChange} name={'error'} error errorMessage={'test error message'}>
                        <Radio value={'+'} type={'primary'}>Plus</Radio>
                        <Radio value={'/'} type={'primary'}>Divided by</Radio>
                        <Radio value={'*'} type={'primary'}>Times</Radio>
                        <Radio value={'-'} type={'primary'}>Minus</Radio>
                    </RadioGroup>
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Disabled:</span>
                    <RadioGroup value={value} disabled onChange={handleChange} name={'disabled'}>
                        <Radio value={'+'} type={'secondary'}>Plus</Radio>
                        <Radio value={'/'} type={'secondary'}>Divided by</Radio>
                        <Radio value={'*'} type={'secondary'}>Times</Radio>
                        <Radio value={'-'} type={'secondary'}>Minus</Radio>
                    </RadioGroup>
                </div>
            </div>
        </div>
    )
}

export default RadiosKit
