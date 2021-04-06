import * as React from 'react'
import {Helmet} from 'react-helmet'
import classnames from 'classnames'
import css from './index.module.scss'
import AvatarsKit from '@components/scenes/components-kit-scene/components/avatars-kit'

const ComponentsKitScene = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Components Kit</title>
            </Helmet>

            <div className={classnames(css.componentsKitScene, 'container')}>
                <AvatarsKit />
            </div>
        </React.Fragment>
    )
}

export default ComponentsKitScene
