import * as React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Routes from '@routing/routes'
import {useDispatch} from 'react-redux'
import {UiAction} from '@store/ui'
import {WebNotificationAction} from '@store/web-notification'
import {useTranslation} from 'react-i18next'

const HomeScene = React.lazy(() => import('@components/scenes/home-scene'))
const RestApiScene = React.lazy(() => import('@components/scenes/rest-api-scene'))
const LoginScene = React.lazy(() => import('@components/scenes/login-scene'))
const LoginByPhoneScene = React.lazy(() => import('@components/scenes/login-by-phone-scene'))
const RegistrationScene = React.lazy(() => import('@components/scenes/registration-scene'))
const CalendarScene = React.lazy(() => import('@components/scenes/calendar-scene'))
const ComponentsKitScene = React.lazy(() => import('@components/scenes/components-kit-scene'))
const ExamplesScene = React.lazy(() => import('@components/scenes/examples-scene'))

const App = () => {
    useTranslation()
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(UiAction.removePreloader())
        dispatch(WebNotificationAction.requestPermission())
    }, [])

    return (
        <React.Suspense fallback={null}>
            <Switch>
                <Route path={Routes.home.root()} component={HomeScene} exact/>
                <Route path={Routes.restApi.root()} component={RestApiScene}/>
                <Route path={Routes.login.root()} component={LoginScene}/>
                <Route path={Routes.loginByPhone.root()} component={LoginByPhoneScene}/>
                <Route path={Routes.registration.root()} component={RegistrationScene}/>
                <Route path={Routes.calendar.root()} component={CalendarScene}/>
                <Route path={Routes.componentsKit.root()} component={ComponentsKitScene}/>
                <Route path={Routes.examples.root()} component={ExamplesScene}/>
                <Redirect from='*' to={Routes.home.root()} exact/>
            </Switch>
        </React.Suspense>
    )
}

export default App
