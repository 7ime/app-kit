import * as React from 'react'
import css from './index.module.scss'
import cssUiKit from '../ui-kit/index.module.scss'
import Alert from '@components/ui/alert/components/alert'

const AlertsKit = () => {
    return (
        <div className={css.alertsKit}>
            <div className={cssUiKit.title}>Alerts Kit:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Info:</span>
                    <Alert type={'info'} parentClass={css.avatar} onClose={() => undefined}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus dicta ducimusam.
                    </Alert>
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Success:</span>
                    <Alert type={'success'} parentClass={css.avatar} onClose={() => undefined}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus dicta ducimusam.
                    </Alert>
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Warning:</span>
                    <Alert type={'warning'} parentClass={css.avatar} onClose={() => undefined}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus dicta ducimusam.
                    </Alert>
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Error:</span>
                    <Alert type={'error'} parentClass={css.avatar} onClose={() => undefined}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus dicta ducimusam.
                    </Alert>
                </div>
            </div>
        </div>
    )
}

export default AlertsKit
