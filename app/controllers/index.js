import { action } from '@ember/object';
import Controller from '@ember/controller';

export default class IndexController extends Controller {
    apiToken = ""

    @action
    setApiToken() {
        localStorage.setItem('apiToken', this.apiToken);
    }

    @action
    removeApiToken() {
        localStorage.removeItem('apiToken', this.apiToken);
    }
}
