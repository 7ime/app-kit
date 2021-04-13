import * as React from 'react'
import classnames from 'classnames'
import InputAdornment from '@material-ui/core/InputAdornment'
import {ITextField} from '../../model'
import css from '../../styles/textfield.module.scss'
import ValidationMessage from '@components/ui/validation-message/components/validation-message'
import {InputBaseProps, TextField} from '@material-ui/core'
import TextFieldTriggerContainer from '@components/ui/textfield/components/textfield-trigger-container'
import TextFieldTrigger from '@components/ui/textfield/components/textfield-trigger'

const Input = React.forwardRef<HTMLDivElement, ITextField.InputProps>((props, ref) => {
    const {
        onReset,
        error,
        success,
        errorMessage,
        successMessage,
        parentClass,
        autoFocus,
        type: externalType,
        InputProps: externalInputProps = {},
        onBlur,
        onFocus,
        ...otherProps
    } = props

    const [isFocused, setFocus] = React.useState(autoFocus)
    const [type, setType] = React.useState(externalType ? externalType : 'text')

    React.useEffect(() => {
        externalType && setType(externalType)
    }, [externalType])

    const handleFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        setFocus(true)
        onFocus && onFocus(event)
    }, [onFocus])

    const handleBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        setFocus(false)
        onBlur && onBlur(event)
    }, [onBlur])

    const handleReset = React.useCallback(() => {
        onReset && onReset()
    }, [onReset])

    const handleChangePasswordType = React.useCallback(() => {
        setType(type === 'password' ? 'text' : 'password')
    }, [type])

    const classNames = classnames(
        css.textField,
        {[css.is_error]: error},
        {[css.is_success]: success},
        parentClass,
    )

    const internalInputProps: InputBaseProps = {...externalInputProps}

    const showResetTrigger = !!onReset
    const showPasswordTrigger =  externalType === 'password'

    if (isFocused && (showResetTrigger || showPasswordTrigger)) {
        internalInputProps.endAdornment = (
            <InputAdornment position={'end'}>
                <TextFieldTriggerContainer>
                    {
                        showPasswordTrigger && (
                            <TextFieldTrigger type={type === 'password' ? 'showPassword' : 'hidePassword'} onClick={handleChangePasswordType}/>
                        )
                    }
                    {
                        showResetTrigger && <TextFieldTrigger type={'reset'} onClick={handleReset}/>
                    }
                </TextFieldTriggerContainer>
            </InputAdornment>
        )
    }

    return (
        <div className={classNames}>
            <TextField
                ref={ref}
                {...otherProps}
                type={type}
                autoFocus={autoFocus}
                onFocus={handleFocus}
                onBlur={handleBlur}
                InputProps={internalInputProps}
            />

            {success && successMessage && (
                <ValidationMessage type={'success'} parentClass={css.validationMessage}>{successMessage}</ValidationMessage>
            )}

            {error && errorMessage && (
                <ValidationMessage type={'error'} parentClass={css.validationMessage}>{errorMessage}</ValidationMessage>
            )}
        </div>
    )
})

export default React.memo(Input)
