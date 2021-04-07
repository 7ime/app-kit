import {environment} from '@toolbox/environment'
import {SAMPLE} from '@toolbox/sample'

export const configurationRoutes = Object.freeze(
    {
        rootUrl: `${environment.production && SAMPLE.APP_WEBSITE_ROOT_URL ? SAMPLE.APP_WEBSITE_ROOT_URL : ''}/`
    }
)
