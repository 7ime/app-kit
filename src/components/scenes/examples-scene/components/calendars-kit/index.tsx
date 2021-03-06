import * as React from 'react'
import css from './index.module.scss'
import cssUiKit from '../ui-kit/index.module.scss'
import Calendar from '@components/ui/calendar/components/calendar'

const CalendarsKit = () => {
    return (
        <div className={css.calendarsKit}>
            <div className={cssUiKit.title}>Calendars:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Default:</span>
                    <Calendar parentClass={css.calendar} />
                </div>
            </div>
        </div>
    )
}

export default CalendarsKit
