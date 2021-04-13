export type IFormValidationRules = 'required' | 'email' | 'min' | 'confirm' | 'phoneNumber'

export type IFormFieldsInLocales<T> = Record<keyof T, {
    label: string;
    name: keyof T;
    errors?: Partial<Record<IFormValidationRules, string>>;
}>;

export interface IFormInLocales<T> {
    submit: string;
    fields: IFormFieldsInLocales<T>
}
