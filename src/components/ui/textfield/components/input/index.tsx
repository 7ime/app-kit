import * as React from 'react'
import classnames from 'classnames'
import {TextField} from '@material-ui/core'
import {ITextfield} from '../../model'
import css from '../../styles/textfield.module.scss'
import ValidationMessage from '@components/ui/validation-message/components/validation-message'

const Input = (props: ITextfield.InputProps) => {
    const {
        onReset,
        error,
        success,
        errorMessage,
        successMessage,
        parentClass,
        ...otherProps
    } = props

    const classNames = classnames(
        css.textfield,
        {[css.is_error]: error},
        {[css.is_success]: success},
        parentClass,
    )

    const handleReset = React.useCallback(() => {
        onReset && onReset()
    }, [onReset])

    return (
        <div className={classNames}>
            <TextField
                {...otherProps}
            />

            {success && successMessage && (
                <ValidationMessage type={'success'} parentClass={css.validationMessage}>{successMessage}</ValidationMessage>
            )}

            {error && errorMessage && (
                <ValidationMessage type={'error'} parentClass={css.validationMessage}>{errorMessage}</ValidationMessage>
            )}
        </div>
    )
}

export default React.memo(Input)
