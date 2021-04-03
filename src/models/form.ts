export type IFormValidationRules = 'required' | 'email' | 'min' | 'confirm'

export type IFormFieldsInLocales<T> = Record<keyof T, {
    label: string;
    name: string;
    errors?: Partial<Record<IFormValidationRules, string>>;
}>;

export interface IFormInLocales<T> {
    submit: string;
    fields: IFormFieldsInLocales<T>
}
