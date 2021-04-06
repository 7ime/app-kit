import * as React from 'react'
import {Helmet} from 'react-helmet'
import classnames from 'classnames'
import css from './index.module.scss'
import ExamplesSidebar from '@components/scenes/examples-scene/components/examples-sidebar'

const ExamplesScene = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Examples</title>
            </Helmet>

            <div className={classnames(css.exampleScene)}>
                <ExamplesSidebar parentClass={css.sidebar} />

                <div className={css.content}>

                </div>
            </div>
        </React.Fragment>
    )
}

export default ExamplesScene
