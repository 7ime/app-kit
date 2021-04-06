import * as React from 'react'
import css from './index.module.scss'
import cssUiKit from '../ui-kit/index.module.scss'
import ValidationMessage from '@components/ui/validation-message/components/validation-message'

const ValidationMessageKit = () => {
    return (
        <div className={css.validationMessageKit}>
            <div className={cssUiKit.title}>Validation messages:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Success:</span>
                    <ValidationMessage type={'success'}>Test message</ValidationMessage>
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Error:</span>
                    <ValidationMessage type={'error'}>Test message</ValidationMessage>
                </div>
            </div>
        </div>
    )
}

export default ValidationMessageKit
