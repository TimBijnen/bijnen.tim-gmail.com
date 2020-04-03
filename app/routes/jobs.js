import Route from "@ember/routing/route";

export default class JobsRoute extends Route {
    model() {
        return this.store.findAll("job");
    }
}
