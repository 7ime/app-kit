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

    static calendar = class {
        static root = () => '/calendar'
    }

    static avatar = class {
        static root = () => '/avatar'
    }

    static restApi = class {
        static root = () => '/rest-api'
    }
}
