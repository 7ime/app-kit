import * as React from 'react'
import {Helmet} from 'react-helmet'
import classnames from 'classnames'
import css from './index.module.scss'
import AvatarsKit from '@components/scenes/examples-scene/components/avatars-kit'

const UiKit = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Examples Ui Kit</title>
            </Helmet>

            <div className={classnames(css.uiKit, 'container')}>
                <AvatarsKit />
            </div>
        </React.Fragment>
    )
}

export default UiKit
