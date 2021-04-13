import * as React from 'react'
import {Helmet} from 'react-helmet'
import AuthLayout from '@components/common/layouts/auth-layout'
import {useTranslation} from 'react-i18next'
import AuthLoginByPhone from '@components/common/auth/auth-login-by-phone'
import {EI18nNameSpaces} from '@constants/i18n'

const LoginByPhoneScene = () => {
    const {t} = useTranslation(EI18nNameSpaces.auth)

    return (
        <React.Fragment>
            <Helmet>
                <title>{t('auth:loginByPhone.pageTitle')}</title>
            </Helmet>

            <AuthLayout>
                <AuthLoginByPhone />
            </AuthLayout>
        </React.Fragment>
    )
}

export default LoginByPhoneScene
