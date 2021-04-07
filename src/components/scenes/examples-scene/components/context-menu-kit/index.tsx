import * as React from 'react'
import css from './index.module.scss'
import cssUiKit from '../ui-kit/index.module.scss'
import Button from '@components/ui/buttons/components/button'
import ContextMenu from '@components/ui/context-menu/components/context-menu'
import {ICursorPosition} from '@models/metrics'

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
                        <div className={css.contextMenu}>
                            <div className={css.contextMenuItem}>Some action 1</div>
                            <div className={css.contextMenuItem}>Some action 2</div>
                            <div className={css.contextMenuItem}>Some action 3</div>
                            <div className={css.contextMenuItem}>Some action 4</div>
                            <div className={css.contextMenuItem}>Some action 5</div>
                        </div>
                    </ContextMenu>
                )
            }
        </div>
    )
}

export default ContextMenuKit
