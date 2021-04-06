import * as React from 'react'
import classnames from 'classnames'
import {NavLink} from 'react-router-dom'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import Routes from '@routing/routes'

interface IProps extends IParentClass {}

const ExamplesSidebar = (props: IProps) => {
    const {
        parentClass
    } = props

    const classNames = classnames(
        css.examplesSidebar,
        parentClass
    )

    return (
        <div className={classNames}>
            <div className={css.logo}>App <span>Kit</span></div>

            <div className={css.menu}>
                <NavLink to={Routes.home.root()}
                         exact
                         activeClassName={css.is_active}
                         className={css.link}
                >
                    <div className={classnames(css.icon, css.home)} />
                    <div className={css.text}>Home</div>
                </NavLink>

                <NavLink to={Routes.examples.uiKit()}
                         activeClassName={css.is_active}
                         className={css.link}
                >
                    <div className={classnames(css.icon, css.uiKit)} />
                    <div className={css.text}>Ui kit</div>
                </NavLink>

                <NavLink to={Routes.examples.authKit()}
                         activeClassName={css.is_active}
                         className={css.link}
                >
                    <div className={classnames(css.icon, css.authKit)} />
                    <div className={css.text}>Auth kit</div>
                </NavLink>
            </div>
        </div>
    )
}

export default ExamplesSidebar
