import {generatePosts} from './data.js'; //модуль, который создаёт данные
import {render} from './drowing_pictures.js';
import {fullsizepicture} from './big_picture.js';

generatePosts();
render(2);
fullsizepicture();
