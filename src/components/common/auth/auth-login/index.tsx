import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import css from './index.module.scss'
import AuthContainer from '@components/common/auth/auth-container'
import AuthTitle from '@components/common/auth/auth-title'
import AuthDescription from '@components/common/auth/auth-description'
import AuthForm from '@components/common/auth/auth-form'
import Button from '@components/ui/buttons/components/button'
import AuthFormSubmit from '@components/common/auth/auth-form-submit'
import {useTranslation} from 'react-i18next'
import {IFormInLocales} from '@models/form'
import AuthFormRow from '@components/common/auth/auth-form-row'
import Input from '@components/ui/textfield/components/input'
import Alert from '@components/ui/alert/components/alert'
import {EI18nNameSpaces} from '@constants/i18n'

interface IFieldsValues {
    email: string;
    password: string;
}

const AuthLogin = () => {
    const {t} = useTranslation(EI18nNameSpaces.auth)

    const [showErrorAlert, setShowErrorAlert] = React.useState(false)

    const {
        fields,
        submit
    }: IFormInLocales<IFieldsValues> = t('auth:login.form', { returnObjects: true })

    const schema = yup.object().shape({
        email: yup.string().required(fields.email.errors?.required).email(fields.email.errors?.email),
        password: yup.string().required(fields.password.errors?.required).min(8, fields.password.errors?.min),
    })

    const {
        handleSubmit,
        control,
        errors,
        setValue,
        formState,
    } = useForm<IFieldsValues>({
        resolver: yupResolver(schema)
    })

    const handleSubmitAfterValidation = React.useCallback((data: IFieldsValues) => {
        console.log(data)
        setShowErrorAlert(true)
    }, [])

    return (
        <div className={css.authLogin}>
            <AuthContainer>
                <AuthTitle>{t('auth:login.title')}</AuthTitle>
                <AuthDescription parentClass={css.description}>{t('auth:login.description')}</AuthDescription>

                {
                    showErrorAlert && (
                        <Alert
                            type={'error'}
                            onClose={() => setShowErrorAlert(false)}
                            parentClass={css.alert}
                        >
                            {t('auth:login.alert.error')}
                        </Alert>
                    )
                }

                <AuthForm onSubmit={handleSubmit(handleSubmitAfterValidation)} parentClass={css.form}>
                    <AuthFormRow>
                        <Controller
                            name={fields.email.name}
                            control={control}
                            defaultValue={''}
                            render={({ onChange, value }) => (
                                <Input
                                    onChange={onChange}
                                    value={value}
                                    label={fields.email.label}
                                    error={!!errors.email}
                                    errorMessage={errors.email?.message}
                                    onReset={() => setValue('email', '', { shouldValidate: formState.isSubmitted })}
                                />
                            )}
                        />
                    </AuthFormRow>

                    <AuthFormRow>
                        <Controller
                            name={fields.password.name}
                            control={control}
                            defaultValue={''}
                            render={({ onChange, value }) => (
                                <Input
                                    type={'password'}
                                    onChange={onChange}
                                    value={value}
                                    label={fields.password.label}
                                    error={!!errors.password}
                                    errorMessage={errors.password?.message}
                                    onReset={() => setValue('password', '', { shouldValidate: formState.isSubmitted })}
                                />
                            )}
                        />
                    </AuthFormRow>

                    <AuthFormSubmit parentClass={css.submit}>
                        <Button type={'primary'} htmlType={'submit'} fill={'solid'}>{submit}</Button>
                    </AuthFormSubmit>
                </AuthForm>
            </AuthContainer>
        </div>
    )
}

export default AuthLogin
