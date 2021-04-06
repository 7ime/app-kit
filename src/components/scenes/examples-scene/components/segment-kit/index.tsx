import * as React from 'react'
import css from './index.module.scss'
import cssUiKit from '../ui-kit/index.module.scss'
import Segment from '@components/ui/segment/components/segment'

const SegmentsKit = () => {
    return (
        <div className={css.segmentsKit}>
            <div className={cssUiKit.title}>Segments:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Default:</span>
                    <Segment parentClass={css.segment}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at blanditiis culpa cumque dolor earum eveniet facilis illo laborum minus nihil, nostrum provident quibusdam quos sapiente, soluta tempora totam vel.
                    </Segment>
                </div>
            </div>
        </div>
    )
}

export default SegmentsKit
