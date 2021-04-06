import * as React from 'react'
import css from './index.module.scss'
import cssUiKit from '../ui-kit/index.module.scss'
import Input from '@components/ui/textfield/components/input'

const InputsKit = () => {
    const [value, setValue] = React.useState('')

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    return (
        <div className={css.inputsKit}>
            <div className={cssUiKit.title}>Inputs:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Default:</span>
                    <Input label={'Label'} defaultValue={'Test value'}/>
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Reset:</span>
                    <Input label={'Label'} onChange={handleChange} onReset={() => setValue('')} value={value} />
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Password:</span>
                    <Input label={'Label'} type={'password'} />
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Success:</span>
                    <Input label={'Label'} success successMessage={'test success message'} />
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Error:</span>
                    <Input label={'Label'} error errorMessage={'test error message'} />
                </div>

                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Disabled:</span>
                    <Input label={'Label'} disabled value={'Test value'} />
                </div>
            </div>
        </div>
    )
}

export default InputsKit
