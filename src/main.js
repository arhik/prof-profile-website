var Promise = require('bluebird'); // Promise polyfill for IE11
import {bootstrap} from 'aurelia-bootstrapper-webpack';

import '../styles/styles.css'
import '../node_modules/semantic-ui/dist/semantic.min.css';
import '../node_modules/semantic-ui/dist/semantic.min.js';


bootstrap(function(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.start().then(() => aurelia.setRoot('app', document.body));
});
