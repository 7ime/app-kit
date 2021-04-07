import * as React from 'react'
import {ICursorPosition} from '@models/metrics'
import {IParentClass} from '@models/shared'

namespace IContextMenu {
    export interface MenuProps extends IParentClass {
        in: boolean
        onOutsideClick(): unknown
        onExited?(node: HTMLElement): unknown
        cursorPosition: ICursorPosition
    }
    export interface MenuListProps extends IParentClass {
        children?: React.ReactChild | React.ReactNode
    }

    export interface MenuItemProps extends IParentClass {
        children?: React.ReactChild | React.ReactNode

        onMouseDown?(event: React.MouseEvent): unknown
        onMouseUp?(event: React.MouseEvent): unknown
        onClick?(event: React.MouseEvent): unknown
        onFocus?(event: React.FocusEvent): unknown
        onBlur?(event: React.FocusEvent): unknown
        onContextMenu?(event: React.MouseEvent): unknown
    }
}

export default IContextMenu
