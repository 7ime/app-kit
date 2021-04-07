import * as React from 'react'
import classnames from 'classnames'
import css from '../../styles/context-menu-list.module.scss'
import IContextMenu from '@components/ui/context-menu/model'

const ContextMenuItem = (props: IContextMenu.MenuItemProps) => {
    const {
        children,
        parentClass,
        ...restProps
    } = props

    const classNames = classnames(
        css.contextMenuItem,
        parentClass
    )

    return (
        <div className={classNames} {...restProps}>
            {children}
        </div>
    )
}

export default React.memo(ContextMenuItem)
