import * as React from 'react'
import classnames from 'classnames'
import css from './index.module.scss'
import cssUiKit from '../ui-kit/index.module.scss'

const ScrollbarsKit = () => {
    return (
        <div className={css.scrollbarKit}>
            <div className={cssUiKit.title}>Scrollbars:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <span className={cssUiKit.subTitle}>Default:</span>
                    <div className={classnames(css.box,  'scrollbar')}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur eos hic quae quo vitae! Accusamus, blanditiis cum dolores eligendi eveniet illum ipsum laudantium nobis, non provident qui quidem, tempore?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur eos hic quae quo vitae! Accusamus, blanditiis cum dolores eligendi eveniet illum ipsum laudantium nobis, non provident qui quidem, tempore?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur eos hic quae quo vitae! Accusamus, blanditiis cum dolores eligendi eveniet illum ipsum laudantium nobis, non provident qui quidem, tempore?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScrollbarsKit
