import {EI18nLanguages} from '@constants/i18n'
import {i18nResources} from '@i18n/resources'

declare module 'react-i18next' {
    type DefaultResources = typeof i18nResources[EI18nLanguages.EN];
    interface Resources extends DefaultResources {}
}
