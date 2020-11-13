import {UiAction, UiState} from '../index'
import {createReducer} from '@reduxjs/toolkit'

export const reducer = createReducer(UiState.initialState, (builder) => {
    builder
        .addCase(UiAction.preloaderDeleted, (state) => {
            state.preloaderExist = false
        })
        .addCase(UiAction.setTheme, (state, {payload}) => {
            state.theme = payload
        })
        .addCase(UiAction.setSystemTheme, (state, {payload}) => {
            state.systemTheme = payload
        })
        .addCase(UiAction.setLanguage, (state, {payload}) => {
            state.language = payload
        })
})
