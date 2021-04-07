import * as React from 'react'
import {Helmet} from 'react-helmet'
import {useDispatch, useSelector} from 'react-redux'
import {JsonPlaceholderAction, JsonPlaceholderSelector} from '../../../../../store/jsonplaceholder'

import css from './index.module.scss'
import Button from '@components/ui/buttons/components/button'

const RestApi = () => {
    const dispatch = useDispatch()

    const isLoadingPosts = useSelector(JsonPlaceholderSelector.getLoadingPosts)
    const posts = useSelector(JsonPlaceholderSelector.makeGetCertainNumberOfPosts(10))

    React.useEffect(() => {
        return () => {
            dispatch(JsonPlaceholderAction.resetState())
        }
    }, [])

    const loadPosts = React.useCallback(() => {
        dispatch(JsonPlaceholderAction.getPosts())
    }, [])

    return (
        <React.Fragment>
            <Helmet>
                <title>Example Rest Api</title>
            </Helmet>

            <div className={'container'}>
                <div className={css.restApi}>
                    {
                        !posts && <Button fill={'solid'} type={'primary'} loader={isLoadingPosts} onClick={loadPosts} parentClass={css.button}>Load Posts</Button>
                    }

                    {
                        posts && (
                            <div>
                                <h4>Posts: </h4>

                                <ol className={css.list}>
                                    {
                                        posts.map((post) => (
                                            <li className={css.item} key={post.id}>
                                                <div className={css.title}>{post.title}</div>
                                                <div className={css.text}>{post.body}</div>
                                            </li>
                                        ))
                                    }
                                </ol>
                            </div>
                        )
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default RestApi
