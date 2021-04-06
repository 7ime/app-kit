import * as React from 'react'
import css from './index.module.scss'
import cssUiKit from '../ui-kit/index.module.scss'
import Checkbox from '@components/ui/checkboxes/components/checkbox'

const CheckboxesKit = () => {
    const [value, setValue] = React.useState(true)

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked)
    }, [])

    return (
        <div className={css.checkboxesKit}>
            <div className={cssUiKit.title}>Checkboxes:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Default:</span>
                    <Checkbox
                        checked={value}
                        onChange={handleChange}
                    >
                        You agree to the privacy policy
                    </Checkbox>
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Primary:</span>
                    <Checkbox
                        checked={value}
                        onChange={handleChange}
                        type={'primary'}
                    >
                        You agree to the privacy policy
                    </Checkbox>
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Secondary:</span>
                    <Checkbox
                        checked={value}
                        onChange={handleChange}
                        type={'secondary'}
                    >
                        You agree to the privacy policy
                    </Checkbox>
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Disabled:</span>
                    <Checkbox
                        checked={true}
                        onChange={() => undefined}
                        type={'primary'}
                        disabled
                    >
                        You agree to the privacy policy
                    </Checkbox>
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Success:</span>
                    <Checkbox
                        checked={value}
                        onChange={handleChange}
                        type={'primary'}
                        success
                        successMessage={'Test message'}
                    >
                        You agree to the privacy policy
                    </Checkbox>
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Error:</span>
                    <Checkbox
                        checked={false}
                        onChange={() => undefined}
                        type={'primary'}
                        error
                        errorMessage={'Test message'}
                    >
                        You agree to the privacy policy
                    </Checkbox>
                </div>
            </div>
        </div>
    )
}

export default CheckboxesKit
