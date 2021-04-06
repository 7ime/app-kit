import * as React from 'react'
import css from './index.module.scss'
import cssUiKit from '../ui-kit/index.module.scss'

const TypographyKit = () => {
    return (
        <div className={css.typographyKit}>
            <div className={cssUiKit.title}>Typography:</div>

            <div className={css.content}>
                <h1>Heading H1</h1>
                <br/>
                <h2>Heading H2</h2>
                <br/>
                <h3>Heading H3</h3>
                <br/>
                <h4>Heading H4</h4>
                <br/>
                <h5>Heading H5</h5>
                <br/>
                <h6>Heading H6</h6>
                <br/>
                <p>Paragraph text</p>
                <br/>
                <b>Bold text</b>
                <br/>
                <br/>
                <span>Span text</span>
                <br/>
                <br/>
                <i>Italic text</i>
                <br/>
                <br/>
                <em>Em text</em>
                <br/>
                <br/>
                <code>Code text</code>
                <br/>
                <br/>
                <a href='#'>Link</a>
            </div>
        </div>
    )
}

export default TypographyKit
