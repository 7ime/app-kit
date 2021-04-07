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

    static restApi = class {
        static root = () => base('rest-api')
    }

    static examples = class  {
        static root = () => base('examples')
        static uiKit = () => base('examples/ui-kit')
        static authKit = () => base('examples/auth-kit')
    }
}
