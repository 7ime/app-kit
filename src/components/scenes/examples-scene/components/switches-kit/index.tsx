import * as React from 'react'
import css from './index.module.scss'
import cssUiKit from '../ui-kit/index.module.scss'
import Switch from '@components/ui/switches/components/switch'

const SwitchesKit = () => {
    const [value, setValue] = React.useState(true)

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked)
    }, [])

    return (
        <div className={css.switchesKit}>
            <div className={cssUiKit.title}>Switches:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Default:</span>
                    <Switch enabled={value} onChange={handleChange} />
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Primary:</span>
                    <Switch enabled={value} onChange={handleChange} type={'primary'} />
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Secondary:</span>
                    <Switch enabled={value} onChange={handleChange} type={'secondary'} />
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Disabled:</span>
                    <Switch enabled={true} onChange={() => undefined} type={'primary'} disabled />
                </div>
            </div>
        </div>
    )
}

export default SwitchesKit
