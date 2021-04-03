import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import css from './index.module.scss'
import AuthContainer from '@components/common/auth/auth-container'
import AuthTitle from '@components/common/auth/auth-title'
import AuthDescription from '@components/common/auth/auth-description'
import {useTranslation} from 'react-i18next'
import PhoneSelect from '@components/common/phone/phone-select'
import AuthForm from '@components/common/auth/auth-form'
import AuthFormRow from '@components/common/auth/auth-form-row'
import AuthFormSubmit from '@components/common/auth/auth-form-submit'
import Button from '@components/ui/buttons/components/button'
import PhoneCode from '@components/common/phone/phone-code-input'
import {IFormInLocales} from '@models/form'
import Alert from '@components/ui/alert/components/alert'
import classnames from 'classnames'
import PhoneNumber from '@components/common/phone/phone-number'

interface IFieldsValues {
    countryCode: string;
    phoneCode: string;
    phoneNumber: string;
}

const AuthLoginByPhone = () => {
    const {t} = useTranslation('loginByPhone')

    const {
        fields,
        submit
    } = t<IFormInLocales<IFieldsValues>>('loginByPhone:form', { returnObjects: true })

    const [showSuccessAlert, setShowSuccessAlert] = React.useState(false)

    const schema = yup.object().shape({
        countryCode: yup.string().required(fields.countryCode.errors?.required),
        phoneCode: yup.string(),
        phoneNumber: yup.string().required(fields.phoneNumber.errors?.required),
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
        setShowSuccessAlert(true)
    }, [])

    return (
        <div className={css.authLoginByPhone}>
            <AuthContainer>
                <AuthTitle>{t('loginByPhone:title')}</AuthTitle>
                <AuthDescription parentClass={css.description}>{t('loginByPhone:description')}</AuthDescription>

                {
                    showSuccessAlert && (
                        <Alert
                            type={'success'}
                            onClose={() => setShowSuccessAlert(false)}
                            parentClass={css.alert}
                        >
                            <div className={css.alertContent}>
                                <div className={classnames(css.alertIcon, css.success)} />
                                <div className={css.alertMessage}>{t('loginByPhone:alert.success')}</div>
                            </div>
                        </Alert>
                    )
                }

                <AuthForm onSubmit={handleSubmit(handleSubmitAfterValidation)}>
                    <AuthFormRow>
                        <PhoneSelect label={'Country'} name={'country'} />
                    </AuthFormRow>

                    <AuthFormRow>
                        <div className={css.phone}>
                            <div className={css.code}>
                                <PhoneCode />
                            </div>

                            <div className={css.number}>
                                <PhoneNumber />
                            </div>
                        </div>
                    </AuthFormRow>

                    <AuthFormSubmit parentClass={css.submit}>
                        <Button type={'primary'} htmlType={'submit'} fill={'solid'}>{submit}</Button>
                    </AuthFormSubmit>
                </AuthForm>
            </AuthContainer>
        </div>
    )
}

export default AuthLoginByPhone