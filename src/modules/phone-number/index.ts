import {IPhoneNumber} from '@modules/phone-number/model'
import {shapePhoneNumbers} from '@modules/phone-number/helpers/shape-phone-numbers'
import {getPhoneMask} from '@modules/phone-number/helpers/get-phone-mask'
import {shapePhoneCallingCodes} from '@modules/phone-number/helpers/shape-phone-calling-codes'

class PhoneNumber implements IPhoneNumber.Impl {
    private readonly phoneNumbers: IPhoneNumber.PhoneNumbers
    private readonly phoneCallingCodes: IPhoneNumber.PhoneCallingCodes

    constructor() {
        const phoneNumbers = shapePhoneNumbers()

        this.phoneNumbers = phoneNumbers
        this.phoneCallingCodes = shapePhoneCallingCodes(phoneNumbers)
    }

    getCountryCodeByCallingCode(callingCode: IPhoneNumber.CallingCode): IPhoneNumber.CountryCode | null {
        const phoneCallingCode = this.phoneCallingCodes[callingCode]

        return phoneCallingCode ? phoneCallingCode.preferCountry : null
    }

    getCountryCallingCode(countryCode: IPhoneNumber.CountryCode): IPhoneNumber.CallingCode | null {
        const phoneNumber = this.phoneNumbers[countryCode]

        return phoneNumber ? phoneNumber.countryCallingCode : null
    }

    getCountryPhoneExample(countryCode: IPhoneNumber.CountryCode): IPhoneNumber.PhoneExample | null {
        const phoneNumber = this.phoneNumbers[countryCode]

        return phoneNumber ? phoneNumber.example : null
    }

    getCountryPhoneMask(countryCode: IPhoneNumber.CountryCode, determinant?: string): IPhoneNumber.PhoneMask | null {
        const phoneNumber = this.phoneNumbers[countryCode]

        return phoneNumber ? getPhoneMask(phoneNumber) : null
    }
}

const phoneNumber = new PhoneNumber()

export default phoneNumber
