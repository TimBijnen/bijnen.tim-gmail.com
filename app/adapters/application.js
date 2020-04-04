import ENV from '--teamtailor/config/environment';
import { computed } from '@ember/object';
import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default JSONAPIAdapter.extend({
  host: ENV.APP.API_ROOT,
  namespace: ENV.APP.API_VERSION,
  headers: computed(function() {
    return {
      "X-Api-Version": "20161108",
      "Authorization": `Token token=${ localStorage.getItem("apiToken") || ENV.APP.API_TOKEN }`,
    };
  })
});
