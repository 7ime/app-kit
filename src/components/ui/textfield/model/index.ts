import * as React from 'react'
import {TextFieldProps} from '@material-ui/core/TextField/TextField'
import {IFieldValidationStatus} from '../../../../models/field-validation-status'
import {IParentClass} from '@models/shared'

export namespace ITextField {
    export type InputProps = {
        onReset?(): void
    } & IFieldValidationStatus & IParentClass & TextFieldProps

    export interface TriggerContainerProps {
        children: React.ReactChild | React.ReactNode
    }

    export interface TriggerProps {
        type: 'reset' | 'showPassword' | 'hidePassword'
        onClick(): void
    }
}
