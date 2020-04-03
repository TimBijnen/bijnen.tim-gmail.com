import Model, { attr, belongsTo } from '@ember-data/model';

export default class JobModel extends Model {
    @belongsTo("jobs", { inverse: null }) jobs;
    @attr title;
    @attr body;
}
