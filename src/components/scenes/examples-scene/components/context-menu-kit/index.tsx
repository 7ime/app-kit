import * as React from 'react'
import cssUiKit from '../ui-kit/index.module.scss'
import Button from '@components/ui/buttons/components/button'
import ContextMenu from '@components/ui/context-menu/components/context-menu'
import {ICursorPosition} from '@models/metrics'
import ContextMenuList from '@components/ui/context-menu/components/context-menu-list'
import ContextMenuItem from '@components/ui/context-menu/components/context-menu-item'
import css from './index.module.scss'

const ContextMenuKit = () => {
    const [show, setShow] = React.useState(false)
    const [cursorPosition, setCursorPosition] = React.useState<ICursorPosition | null>(null)

    const handleContextMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        event.stopPropagation()

        setCursorPosition({
            x: event.clientX,
            y: event.clientY,
        })

        setShow(true)

        return false
    }

    const handleClose = () => {
        setShow(false)
    }

    const handleExited = () => {
        setCursorPosition(null)
    }

    return (
        <div className={css.contextMenuKit}>
            <div className={cssUiKit.title}>Context menu:</div>

            <Button fill={'solid'} type={'secondary'} onContextMenu={handleContextMenu}>Show context menu</Button>

            {
                cursorPosition && (
                    <ContextMenu in={show} onOutsideClick={handleClose} cursorPosition={cursorPosition} onExited={handleExited}>
                        <ContextMenuList parentClass={css.contextMenuList}>
                            <ContextMenuItem parentClass={css.contextMenuItem}>Some action 1</ContextMenuItem>
                            <ContextMenuItem parentClass={css.contextMenuItem}>Some action 2</ContextMenuItem>
                            <ContextMenuItem parentClass={css.contextMenuItem}>Some action 3</ContextMenuItem>
                            <ContextMenuItem parentClass={css.contextMenuItem}>Some action 4</ContextMenuItem>
                            <ContextMenuItem parentClass={css.contextMenuItem}>Some action 5</ContextMenuItem>
                        </ContextMenuList>
                    </ContextMenu>
                )
            }
        </div>
    )
}

export default ContextMenuKit
