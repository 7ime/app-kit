import {EI18nLanguages, EI18nNameSpaces} from '@constants/i18n'

export type II18nResources = Record<EI18nLanguages, Record<EI18nNameSpaces, Record<string, {}>>>

export const i18nResources: II18nResources = {
    [EI18nLanguages.EN]: {
        [EI18nNameSpaces.settings]: require('../locales/en/settings.json'),
        [EI18nNameSpaces.countries]: require('../locales/en/countries.json'),
        [EI18nNameSpaces.auth]: require('../locales/en/auth.json'),
    }
}
