import * as React from 'react'
import classnames from 'classnames'
import css from '../../styles/context-menu-list.module.scss'
import IContextMenu from '@components/ui/context-menu/model'

const ContextMenuList = (props: IContextMenu.MenuListProps) => {
    const {
        children,
        parentClass,
    } = props

    const classNames = classnames(
        css.contextMenuList,
        parentClass
    )

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}

export default React.memo(ContextMenuList)
