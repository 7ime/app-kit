import {call, put, takeLatest} from 'redux-saga/effects'
import getService from '@services/index'
import {IService} from '@services/model'
import {WebNotificationAction} from '../index'
import {EWebNotificationPermission} from '@constants/web-notification'
import {checkSupportWebNotifications} from '@toolbox/utils/support-features'

const service: IService = getService()

export function* requestPermission() {
    if (checkSupportWebNotifications()) {
        const permission = service.webNotificationService.getPermission()

        if (permission !== EWebNotificationPermission.denied) {
            const response: EWebNotificationPermission = yield call(service.webNotificationService.requestPermission)
            yield put(WebNotificationAction.setPermission(response))
        }
    }
}

export function* rootSaga() {
    yield takeLatest([WebNotificationAction.requestPermission], requestPermission)
}
