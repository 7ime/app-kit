import * as React from 'react'
import css from './index.module.scss'
import cssUiKit from '../ui-kit/index.module.scss'
import Button from '@components/ui/buttons/components/button'
import classnames from 'classnames'
import Modal from '@components/ui/modal/components/modal'

const ModalsKit = () => {
    const [[open, show], setShow] = React.useState([false, false])

    const handleOpen = () => {
        setShow([true, true])
    }

    const handleClose = () => {
        setShow([true, false])
    }

    const handleExited = () => {
        setShow([false, false])
    }

    return (
        <div className={css.modalsKit}>
            <div className={cssUiKit.title}>Modals:</div>

            <Button fill={'solid'} type={'primary'} onClick={handleOpen}>Show modal</Button>

            {
                open && (
                    <Modal onOutsideClick={handleClose} in={show} onExited={handleExited} parentContentClass={classnames(css.modal, css.modalContent)}>
                        <div className={css.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci doloremque doloribus est eum expedita hic id incidunt itaque iusto, libero omnis quam ratione, repudiandae saepe sequi soluta, suscipit tempore.
                        </div>

                        <div className={css.actions}>
                            <Button type={'primary'} fill={'basic'} parentClass={css.button}>Some action</Button>
                            <Button onClick={handleClose} type={'warning'} fill={'basic'} parentClass={css.button}>Close</Button>
                        </div>
                    </Modal>
                )
            }
        </div>
    )
}

export default ModalsKit
