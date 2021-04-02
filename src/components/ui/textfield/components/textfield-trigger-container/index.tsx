import * as React from 'react'
import css from '../../styles/textfield-trigger.module.scss'
import {ITextField} from '@components/ui/textfield/model'

const TextFieldTriggerContainer = ({ children }: ITextField.TriggerContainerProps) => {
    return (
        <div className={css.triggers}>
            {children}
        </div>
    )
}

export default React.memo(TextFieldTriggerContainer)
