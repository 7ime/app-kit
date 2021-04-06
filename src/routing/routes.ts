export default class Routes {
    static home = class {
        static root = () => '/'
    }

    static login = class {
        static root = () => '/login'
    }

    static loginByPhone = class {
        static root = () => '/login-by-phone'
    }

    static registration = class {
        static root = () => '/registration'
    }

    static restApi = class {
        static root = () => '/rest-api'
    }

    static examples = class  {
        static root = () => '/examples'
        static uiKit = () => '/examples/ui-kit'
        static authKit = () => '/examples/auth-kit'
    }
}
