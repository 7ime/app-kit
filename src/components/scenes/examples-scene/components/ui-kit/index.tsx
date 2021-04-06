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

const UiKit = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Examples Ui Kit</title>
            </Helmet>

            <div className={classnames(css.uiKit, 'container')}>
                <AvatarsKit />
                <br/>
                <SwitchesKit />
                <br/>
                <LoadersKit />
                <br/>
                <SelectsKit />
                <br/>
                <AlertsKit />
                <br />
                <CalendarsKit />
                <br/>
                <TypographyKit />
                <br/>
                <ScrollbarsKit />
            </div>
        </React.Fragment>
    )
}

export default UiKit
