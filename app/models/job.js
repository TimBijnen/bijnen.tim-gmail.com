import Model, { attr } from '@ember-data/model';

const LOCATIONS = [ "Stockholm", "Krakau", "Eindhoven" ];

export default class JobModel extends Model {
    @attr title;
    @attr body;
    get location() {
        const index = parseInt(this.id) % LOCATIONS.length;
        return LOCATIONS[index];
    }
    get salary() {
        const randomAddition = ( parseInt(this.id) % 20 ) * 100;
        return 2000 + randomAddition;
    }
    get match() {
        return parseInt(this.id) % 100;
    }
}
