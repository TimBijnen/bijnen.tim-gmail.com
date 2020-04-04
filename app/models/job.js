import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class JobModel extends Model {
    @attr title;
    @attr body;
}
