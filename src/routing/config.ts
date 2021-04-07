import {environment} from '@toolbox/environment'
import {SAMPLE} from '@toolbox/sample'

export const configurationRoutes = Object.freeze(
    {
        baseUrl: environment.production ? SAMPLE.APP_WEBSITE_BASE_URL : '/'
    }
)
