import {NamedProps} from 'react-select/src/Select'
import {IParentClass} from '@models/shared'
import {IFieldValidationStatus} from '@models/field-validation-status'

namespace ISelect {
    export interface Option {
        value: string
        label: string
    }

    export interface Props extends IFieldValidationStatus, IParentClass {
        label: string
        options: Option[]
        name?: string
        value?: Option['value'] | null
        components?: NamedProps['components']

        onChange?(option: Option | null): unknown
    }
}

export default ISelect
