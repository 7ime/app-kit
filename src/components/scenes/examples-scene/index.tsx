import * as React from 'react'
import {Helmet} from 'react-helmet'
import classnames from 'classnames'
import {Redirect, Route, Switch} from 'react-router-dom'
import css from './index.module.scss'
import ExamplesSidebar from '@components/scenes/examples-scene/components/examples-sidebar'
import Routes from '@routing/routes'
import UiKit from '@components/scenes/examples-scene/components/ui-kit'
import RestApi from '@components/scenes/examples-scene/components/rest-api'

const ExamplesScene = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Examples</title>
            </Helmet>

            <div className={classnames(css.exampleScene)}>
                <ExamplesSidebar parentClass={css.sidebar} />

                <div className={css.content}>
                    <Switch>
                        <Route path={Routes.examples.uiKit()} component={UiKit} exact/>
                        <Route path={Routes.examples.restApi()} component={RestApi} exact/>
                        <Redirect from='*' to={Routes.examples.uiKit()} exact/>
                    </Switch>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ExamplesScene
