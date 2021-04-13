import * as React from 'react'
import {Helmet} from 'react-helmet'
import AuthLayout from '@components/common/layouts/auth-layout'
import AuthLogin from '@components/common/auth/auth-login'
import {useTranslation} from 'react-i18next'
import {EI18nNameSpaces} from '@constants/i18n'

const LoginScene = () => {
    const {t} = useTranslation(EI18nNameSpaces.auth)

    return (
        <React.Fragment>
            <Helmet>
                <title>{t('auth:login.pageTitle')}</title>
            </Helmet>

            <AuthLayout>
                <AuthLogin />
            </AuthLayout>
        </React.Fragment>
    )
}

export default LoginScene
