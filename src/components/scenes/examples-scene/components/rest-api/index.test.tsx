import React from 'react'
import {cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import configureMockStore from 'redux-mock-store'
import MockAppState from '@__mocks__/app-state'
import {JsonPlaceholderAction} from '@store/jsonplaceholder'
import {renderTestedComponentWithStore} from '@toolbox/tests/helpers/render-tested-component'
import {IAppState} from '@store/app-reducer'
import RestApi from '@components/scenes/examples-scene/components/rest-api/index'

const store = configureMockStore<IAppState>()(MockAppState.initialAppState())

describe('test RestApi', () => {
    afterEach(() => {
        cleanup()
    })

    it('should be render the component correctly', () => {
        const {container} = renderTestedComponentWithStore((
            <RestApi />
        ), store)

        expect(container).toBeInTheDocument()
    })

    it('check call getPosts', () => {
        const spy = jest.spyOn(JsonPlaceholderAction, 'getPosts')

        renderTestedComponentWithStore((
            <RestApi/>
        ), store)

        expect(spy).toHaveBeenCalledTimes(0)
    })
})
