import {CountryCode as Code} from 'libphonenumber-js'

export namespace IPhoneNumber {
    export type CallingCode = string
    export type CountryCode = Code

    export interface PhoneMask {
        international: string
        internationalShort: string
        national: string
    }

    export interface PhoneExample {
        national: string
        international: string
    }

    export interface PhoneNumber {
        example: PhoneExample
        countryCallingCode: CallingCode
        countryCode: CountryCode
    }

    export type PhoneNumbers = {
        [key in CountryCode]: PhoneNumber
    }

    export interface PhoneCallingCode {
        countryCodes: CountryCode[];
        preferCountry: CountryCode;
    }

    export type PhoneCallingCodes = Record<string, PhoneCallingCode>

    export interface Impl {
        getCountryCodeByCallingCode(callingCode: CallingCode): CountryCode | null
        getCountryCallingCode(countryCode: CountryCode): CallingCode | null
        getCountryPhoneExample(countryCode: CountryCode): PhoneExample | null
        getCountryPhoneMask(countryCode: CountryCode, determinant?: string): PhoneMask | null
    }
}


