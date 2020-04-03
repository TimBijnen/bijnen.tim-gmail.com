import Route from '@ember/routing/route';

export default class JobsJobRoute extends Route {
    model({ id }) {
        return this.store.findRecord('job', id);
    }
}
