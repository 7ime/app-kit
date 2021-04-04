import {getCountries, getExampleNumber} from 'libphonenumber-js'
import examples from 'libphonenumber-js/examples.mobile.json'
import {IPhoneNumber} from '@modules/phone-number/model'

export const shapePhoneNumbers = (): IPhoneNumber.PhoneNumbers => {
    return getCountries().reduce((prev: IPhoneNumber.PhoneNumbers, countryCode): IPhoneNumber.PhoneNumbers => {
        const exampleNumber = getExampleNumber(countryCode, examples)

        if (exampleNumber) {
            prev[countryCode] = {
                countryCode,
                countryCallingCode: exampleNumber.countryCallingCode as string,
                example: {
                    international: exampleNumber.formatInternational(),
                    national: exampleNumber.formatNational(),
                }
            }
        }

        return prev
    }, {} as IPhoneNumber.PhoneNumbers)
}
