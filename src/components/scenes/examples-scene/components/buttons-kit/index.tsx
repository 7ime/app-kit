import * as React from 'react'
import css from './index.module.scss'
import cssUiKit from '../ui-kit/index.module.scss'
import Button from '@components/ui/buttons/components/button'

const ButtonsKit = () => {
    return (
        <div className={css.buttonsKit}>
            <div className={cssUiKit.title}>Buttons:</div>

            <div className={css.section}>
                <div className={cssUiKit.subTitle}>Fill basic:</div>

                <div className={css.list}>
                    <div className={css.item}>
                        <Button fill={'basic'}>Default</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'basic'} type={'primary'}>Primary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'basic'} type={'secondary'}>Secondary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'basic'} type={'warning'}>Warning</Button>
                    </div>
                </div>
            </div>

            <div className={css.section}>
                <div className={cssUiKit.subTitle}>Shape round for basic:</div>

                <div className={css.list}>
                    <div className={css.item}>
                        <Button fill={'basic'} shape={'round'}>Default</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'basic'} type={'primary'} shape={'round'}>Primary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'basic'} type={'secondary'} shape={'round'}>Secondary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'basic'} type={'warning'} shape={'round'}>Warning</Button>
                    </div>
                </div>
            </div>

            <div className={css.section}>
                <div className={cssUiKit.subTitle}>Loader for basic:</div>

                <div className={css.list}>
                    <div className={css.item}>
                        <Button fill={'basic'} loader>Default</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'basic'} type={'primary'} loader>Primary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'basic'} type={'secondary'} loader>Secondary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'basic'} type={'warning'} loader>Warning</Button>
                    </div>
                </div>
            </div>

            <div className={css.section}>
                <div className={cssUiKit.subTitle}>Disabled for basic:</div>

                <div className={css.list}>
                    <div className={css.item}>
                        <Button fill={'basic'} disabled>Default</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'basic'} type={'primary'} disabled>Primary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'basic'} type={'secondary'} disabled>Secondary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'basic'} type={'warning'} disabled>Warning</Button>
                    </div>
                </div>
            </div>

            <br/>
            <br/>

            <div className={css.section}>
                <div className={cssUiKit.subTitle}>Fill solid:</div>

                <div className={css.list}>
                    <div className={css.item}>
                        <Button fill={'solid'}>Default</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'solid'} type={'primary'}>Primary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'solid'} type={'secondary'}>Secondary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'solid'} type={'warning'}>Warning</Button>
                    </div>
                </div>
            </div>

            <div className={css.section}>
                <div className={cssUiKit.subTitle}>Shape round for solid:</div>

                <div className={css.list}>
                    <div className={css.item}>
                        <Button fill={'solid'} shape={'round'}>Default</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'solid'} type={'primary'} shape={'round'}>Primary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'solid'} type={'secondary'} shape={'round'}>Secondary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'solid'} type={'warning'} shape={'round'}>Warning</Button>
                    </div>
                </div>
            </div>

            <div className={css.section}>
                <div className={cssUiKit.subTitle}>Loader for solid:</div>

                <div className={css.list}>
                    <div className={css.item}>
                        <Button fill={'solid'} loader>Default</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'solid'} type={'primary'} loader>Primary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'solid'} type={'secondary'} loader>Secondary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'solid'} type={'warning'} loader>Warning</Button>
                    </div>
                </div>
            </div>

            <div className={css.section}>
                <div className={cssUiKit.subTitle}>Disabled for solid:</div>

                <div className={css.list}>
                    <div className={css.item}>
                        <Button fill={'solid'} disabled>Default</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'solid'} type={'primary'} disabled>Primary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'solid'} type={'secondary'} disabled>Secondary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'solid'} type={'warning'} disabled>Warning</Button>
                    </div>
                </div>
            </div>

            <br/>
            <br/>

            <div className={css.section}>
                <div className={cssUiKit.subTitle}>Fill outlined:</div>

                <div className={css.list}>
                    <div className={css.item}>
                        <Button fill={'outlined'}>Default</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'outlined'} type={'primary'}>Primary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'outlined'} type={'secondary'}>Secondary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'outlined'} type={'warning'}>Warning</Button>
                    </div>
                </div>
            </div>

            <div className={css.section}>
                <div className={cssUiKit.subTitle}>Shape round for outlined:</div>

                <div className={css.list}>
                    <div className={css.item}>
                        <Button fill={'outlined'} shape={'round'}>Default</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'outlined'} type={'primary'} shape={'round'}>Primary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'outlined'} type={'secondary'} shape={'round'}>Secondary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'outlined'} type={'warning'} shape={'round'}>Warning</Button>
                    </div>
                </div>
            </div>

            <div className={css.section}>
                <div className={cssUiKit.subTitle}>Loader for outlined:</div>

                <div className={css.list}>
                    <div className={css.item}>
                        <Button fill={'outlined'} loader>Default</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'outlined'} type={'primary'} loader>Primary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'outlined'} type={'secondary'} loader>Secondary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'outlined'} type={'warning'} loader>Warning</Button>
                    </div>
                </div>
            </div>

            <div className={css.section}>
                <div className={cssUiKit.subTitle}>Disabled for outlined:</div>

                <div className={css.list}>
                    <div className={css.item}>
                        <Button fill={'outlined'} disabled>Default</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'outlined'} type={'primary'} disabled>Primary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'outlined'} type={'secondary'} disabled>Secondary</Button>
                    </div>

                    <div className={css.item}>
                        <Button fill={'outlined'} type={'warning'} disabled>Warning</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ButtonsKit
