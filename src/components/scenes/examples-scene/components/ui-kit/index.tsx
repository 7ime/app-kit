import * as React from 'react'
import {Helmet} from 'react-helmet'
import classnames from 'classnames'
import css from './index.module.scss'
import AvatarsKit from '@components/scenes/examples-scene/components/avatars-kit'
import CalendarsKit from '@components/scenes/examples-scene/components/calendars-kit'
import AlertsKit from '@components/scenes/examples-scene/components/alerts-kit'
import SelectsKit from '@components/scenes/examples-scene/components/selects-kit'
import LoadersKit from '@components/scenes/examples-scene/components/loaders-kit'
import TypographyKit from '@components/scenes/examples-scene/components/typography-kit'
import ScrollbarsKit from '@components/scenes/examples-scene/components/scrollbar-kit'
import SwitchesKit from '@components/scenes/examples-scene/components/switches-kit'
import ValidationMessageKit from '@components/scenes/examples-scene/components/validation-message-kit'
import CheckboxesKit from '@components/scenes/examples-scene/components/checkboxes-kit'
import RadiosKit from '@components/scenes/examples-scene/components/radios-kit'
import InputsKit from '@components/scenes/examples-scene/components/inputs-kit'
import SegmentsKit from '@components/scenes/examples-scene/components/segment-kit'
import ButtonsKit from '@components/scenes/examples-scene/components/buttons-kit'

const UiKit = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Examples Ui Kit</title>
            </Helmet>

            <div className={classnames(css.uiKit, 'container')}>
                <AvatarsKit />
                <div className={css.divider} />
                <ButtonsKit />
                <div className={css.divider} />
                <ValidationMessageKit />
                <div className={css.divider} />
                <SwitchesKit />
                <div className={css.divider} />
                <CheckboxesKit />
                <div className={css.divider} />
                <RadiosKit />
                <div className={css.divider} />
                <InputsKit />
                <div className={css.divider} />
                <SelectsKit />
                <div className={css.divider} />
                <AlertsKit />
                <div className={css.divider} />
                <CalendarsKit />
                <div className={css.divider} />
                <SegmentsKit />
                <div className={css.divider} />
                <LoadersKit />
                <div className={css.divider} />
                <TypographyKit />
                <div className={css.divider} />
                <ScrollbarsKit />
            </div>
        </React.Fragment>
    )
}

export default UiKit
