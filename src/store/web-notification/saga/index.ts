import {call, put, takeLatest} from 'redux-saga/effects'
import getService from '@services/index'
import {IService} from '@services/model'
import {WebNotificationAction} from '../index'

const service: IService = getService()

export function* requestPermission() {
    const response = yield call(service.webNotificationService.requestPermission)
    yield put(WebNotificationAction.setPermission(response))
}

export function* rootSaga() {
    yield takeLatest([WebNotificationAction.requestPermission], requestPermission)
}
