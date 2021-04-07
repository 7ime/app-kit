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
            <div className={css.logo}>App <span>Kit</span> <i>v1.0.0</i></div>

            <div className={css.menu}>
                <div className={css.section}>
                    <div className={css.title}>General</div>

                    <div className={css.links}>
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
                            <div className={classnames(css.icon, css.folder)} />
                            <div className={css.text}>Ui kit</div>
                        </NavLink>
                    </div>
                </div>


                <div className={css.section}>
                    <div className={css.title}>Auth Kit</div>

                    <div className={css.links}>
                        <NavLink to={Routes.login.root()}
                                 activeClassName={css.is_active}
                                 className={css.link}
                        >
                            <div className={classnames(css.icon, css.key)} />
                            <div className={css.text}>Login</div>
                        </NavLink>

                        <NavLink to={Routes.loginByPhone.root()}
                                 activeClassName={css.is_active}
                                 className={css.link}
                        >
                            <div className={classnames(css.icon, css.key)} />
                            <div className={css.text}>Login by phone</div>
                        </NavLink>

                        <NavLink to={Routes.registration.root()}
                                 activeClassName={css.is_active}
                                 className={css.link}
                        >
                            <div className={classnames(css.icon, css.userPlus)} />
                            <div className={css.text}>Registration</div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExamplesSidebar
