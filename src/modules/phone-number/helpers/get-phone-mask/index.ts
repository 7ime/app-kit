import {IPhoneNumber} from '@modules/phone-number/model'
import {DEFAULT_DETERMINANT} from '@modules/phone-number/constants/shared'

export const getPhoneMask = (phoneNumber: IPhoneNumber.PhoneNumber, determinant: string = DEFAULT_DETERMINANT): IPhoneNumber.PhoneMask => {
    const {
        example
    } = phoneNumber

    return {
        international: example.international.replace(/\d/g, determinant),
        internationalShort: example.international.split(' ').slice(1).join(' ').replace(/\d/g, determinant),
        national: example.national.replace(/\d/g, determinant),
    }
}
