import {EI18nLanguages} from '@constants/i18n'

export type II18nResources = Record<EI18nLanguages, {}>

export const i18nResources: II18nResources = {
    [EI18nLanguages.EN]: {
        countries: require('../locales/en/countries.json'),
        auth: require('../locales/en/auth.json'),
    }
}
