import {IPhoneNumber} from '@modules/phone-number/model'

export const DEFAULT_DETERMINANT = '#'

export const PREFER_COUNTRY_CODE: Record<string, IPhoneNumber.CountryCode> = {
    1: 'US',
    7: 'RU'
}
