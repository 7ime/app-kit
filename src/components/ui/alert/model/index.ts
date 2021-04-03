import {IParentClass} from '@models/shared'
import * as React from 'react'

namespace IAlert {
    export interface Props extends IParentClass {
        children: React.ReactChild | React.ReactNode
        type?: 'info' | 'success' | 'error' | 'warning'
        onClose(): unknown
    }
}

export default IAlert
