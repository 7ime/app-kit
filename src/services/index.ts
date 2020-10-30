import {IService} from './model'
import JsonPlaceholderService from './jsonplaceholder-service'
import UiService from '@services/ui-service'
import WebNotificationService from '@services/web-notification-service'
import SwService from '@services/sw-service'

class Service implements IService {
    jsonPlaceholderService = new JsonPlaceholderService()
    uiService = new UiService()
    webNotificationService = new WebNotificationService()
    swService = new SwService()
}

const service = new Service()

const getService = () => service

export default getService
