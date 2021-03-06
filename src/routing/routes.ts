import {configurationRoutes} from '@routing/config'

const base = (rest= '') => `${configurationRoutes.rootUrl}${rest}`

export default class Routes {
    static home = class {
        static root = () => base()
    }

    static login = class {
        static root = () => base('login')
    }

    static loginByPhone = class {
        static root = () => base('login-by-phone')
    }

    static registration = class {
        static root = () => base('registration')
    }

    static examples = class  {
        static root = () => base('examples')
        static uiKit = () => base('examples/ui-kit')
        static restApi = () => base('examples/rest-api')
    }
}
