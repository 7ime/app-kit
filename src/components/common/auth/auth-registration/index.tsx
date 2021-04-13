import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import classnames from 'classnames'
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
    password2: string;
}

const AuthRegistration = () => {
    const {t} = useTranslation(EI18nNameSpaces.auth)

    const {
        fields,
        submit
    }: IFormInLocales<IFieldsValues> = t('auth:registration.form', { returnObjects: true })

    const [showInfoAlert, setShowInfoAlert] = React.useState(true)
    const [showSuccessAlert, setShowSuccessAlert] = React.useState(false)


    const schema = yup.object().shape({
        email: yup.string().required(fields.email.errors?.required).email(fields.email.errors?.email),
        password: yup.string().required(fields.password.errors?.required).min(8, fields.password.errors?.min),
        password2: yup.string().required(fields.password2.errors?.required).oneOf([yup.ref('password')], fields.password2.errors?.confirm),
    })

    const {
        handleSubmit,
        control,
        setValue,
        formState: { errors, isSubmitted },
    } = useForm<IFieldsValues>({
        resolver: yupResolver(schema)
    })

    const handleSubmitAfterValidation = React.useCallback((data: IFieldsValues) => {
        console.log(data)
        setShowSuccessAlert(true)
    }, [])

    return (
        <div className={css.authRegistration}>

            <AuthContainer>
                <AuthTitle>{t('auth:registration.title')}</AuthTitle>
                <AuthDescription parentClass={css.description}>{t('auth:registration.description')}</AuthDescription>

                {
                    showInfoAlert && (
                        <Alert
                            onClose={() => setShowInfoAlert(false)}
                            parentClass={css.alert}
                        >
                            <div className={css.alertContent}>
                                <div className={classnames(css.alertIcon, css.info)} />
                                <div className={css.alertMessage}>{t('auth:registration.alert.info')}</div>
                            </div>
                        </Alert>
                    )
                }

                {
                    showSuccessAlert && (
                        <Alert
                            type={'success'}
                            onClose={() => setShowSuccessAlert(false)}
                            parentClass={css.alert}
                        >
                            <div className={css.alertContent}>
                                <div className={classnames(css.alertIcon, css.success)} />
                                <div className={css.alertMessage}>{t('auth:registration.alert.success')}</div>
                            </div>
                        </Alert>
                    )
                }

                <AuthForm onSubmit={handleSubmit(handleSubmitAfterValidation)} parentClass={css.form}>
                    <AuthFormRow>
                        <Controller
                            name={fields.email.name}
                            control={control}
                            defaultValue={''}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    label={fields.email.label}
                                    error={!!errors.email}
                                    errorMessage={errors.email?.message}
                                    onReset={() => setValue('email', '', { shouldValidate: isSubmitted })}
                                />
                            )}
                        />
                    </AuthFormRow>

                    <AuthFormRow>
                        <Controller
                            name={fields.password.name}
                            control={control}
                            defaultValue={''}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    type={'password'}
                                    label={fields.password.label}
                                    error={!!errors.password}
                                    errorMessage={errors.password?.message}
                                    onReset={() => setValue('password', '', { shouldValidate: isSubmitted })}
                                />
                            )}
                        />
                    </AuthFormRow>

                    <AuthFormRow>
                        <Controller
                            name={fields.password2.name}
                            control={control}
                            defaultValue={''}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    type={'password'}
                                    label={fields.password2.label}
                                    error={!!errors.password2}
                                    errorMessage={errors.password2?.message}
                                    onReset={() => setValue('password2', '', { shouldValidate: isSubmitted })}
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

export default AuthRegistration
