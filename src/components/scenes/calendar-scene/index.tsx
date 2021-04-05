import * as React from 'react'
import {Helmet} from 'react-helmet'
import css from './index.module.scss'
import Calendar from '@components/ui/calendar/components/calendar'

const CalendarScene = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Calendar</title>
            </Helmet>

            <div className={css.calendarScene}>
                <Calendar />
            </div>
        </React.Fragment>
    )
}

export default CalendarScene
