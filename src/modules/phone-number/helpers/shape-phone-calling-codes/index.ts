import {IPhoneNumber} from '@modules/phone-number/model'
import {PREFER_COUNTRY_CODE} from '@modules/phone-number/constants/shared'

const getPreferCountryCode = (callingCode: IPhoneNumber.CallingCode, countryCode: IPhoneNumber.CountryCode): IPhoneNumber.CountryCode => {
    if (callingCode in PREFER_COUNTRY_CODE) {
        return PREFER_COUNTRY_CODE[callingCode]
    }

    return countryCode
}

export const shapePhoneCallingCodes = (phoneNumbers: IPhoneNumber.PhoneNumbers): IPhoneNumber.PhoneCallingCodes => {
    const countryCodes: IPhoneNumber.CountryCode[] = Object.keys(phoneNumbers) as IPhoneNumber.CountryCode[]

    return countryCodes.reduce((prev: IPhoneNumber.PhoneCallingCodes, countryCode) => {
        const {
            countryCallingCode
        } = phoneNumbers[countryCode]

        if (countryCallingCode in prev) {
            prev[countryCallingCode].countryCodes.push(countryCode)
        } else {
            prev[countryCallingCode] = {
                countryCodes: [countryCode],
                preferCountry: getPreferCountryCode(countryCallingCode, countryCode)
            }
        }

        return prev
    }, {})
}
