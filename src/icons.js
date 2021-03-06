import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faShareSquare, faGripLines, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faShareSquare, faGripLines, faTimes, faTwitter);

Vue.component('font-awesome-icon', FontAwesomeIcon);
