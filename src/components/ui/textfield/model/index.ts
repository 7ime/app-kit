import {TextFieldProps} from '@material-ui/core/TextField/TextField'
import {IFieldValidationStatus} from '../../../../models/field-validation-status'
import {IParentClass} from '@models/shared'

export namespace ITextfield {
    export type InputProps = {
        onReset?(): void
    } & IFieldValidationStatus & IParentClass & TextFieldProps
}
