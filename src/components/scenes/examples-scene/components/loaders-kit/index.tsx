import * as React from 'react'
import css from './index.module.scss'
import cssUiKit from '../ui-kit/index.module.scss'
import Loader from '@components/ui/loaders/components/loader'

const LoadersKit = () => {
    return (
        <div className={css.loadersKit}>
            <div className={cssUiKit.title}>Loaders Kit:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Default:</span>
                    <Loader parentClass={css.loader} />
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Primary:</span>
                    <Loader type={'primary'} parentClass={css.loader} />
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Secondary:</span>
                    <Loader type={'secondary'} parentClass={css.loader} />
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Large size:</span>
                    <Loader type={'primary'} size={'large'} parentClass={css.loader} />
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Small size:</span>
                    <Loader type={'primary'} size={'small'} parentClass={css.loader} />
                </div>
            </div>
        </div>
    )
}

export default LoadersKit
