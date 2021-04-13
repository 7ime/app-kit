import * as React from 'react'
import {Helmet} from 'react-helmet'
import AuthLayout from '@components/common/layouts/auth-layout'
import {useTranslation} from 'react-i18next'
import AuthRegistration from '@components/common/auth/auth-registration'
import {EI18nNameSpaces} from '@constants/i18n'

const RegistrationScene = () => {
    const {t} = useTranslation(EI18nNameSpaces.auth)

    return (
        <React.Fragment>
            <Helmet>
                <title>{t('auth:registration.pageTitle')}</title>
            </Helmet>

            <AuthLayout>
                <AuthRegistration />
            </AuthLayout>
        </React.Fragment>
    )
}

export default RegistrationScene
