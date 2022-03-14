import {randomIntegerFromRange} from './until.js';

const DESCRIPTIONS_OF_PHOTO = 'это описание фотографии';

const COMMENTS_FROM_USERS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];


const USER_NAMES = [
  'Илларион Тихобздеев',
  'Джонни Синс',
  'Твердислав Воиборзович',
  'Дурачёк местный',
  'Прохор Шаляпин',
  'Илон Маск',
  'Карл Маркс',
  'Эбонитовая палочка',
  'Евгений Карацупа',
  'Сарафанное радио',
  'Кукушка местная',
  'Кошка Дуся',
  'Ибрагим',
  'Джон Коннор',
  'Олег Газманов',
  'Робин Бобин',
  'Хайпожор',
  'Дудка и трубник',
  'Кожура от банана',
  'Тимофей Лебедев',
  'Хитрый страус',
  'Большой папочка',
  'Евгений Зюзин',
  'Полиграф Полиграфович',
  'Акакий Башмачкин',
];


const getRandomArrayElement = (elements) => elements[randomIntegerFromRange(0, elements.length - 1)];


const generateComments = (index) => ({
  id: index + 1,
  avatar: `img/avatar-${randomIntegerFromRange(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS_FROM_USERS),
  name: getRandomArrayElement(USER_NAMES),
});

const generatePosts = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTIONS_OF_PHOTO,
  likes: randomIntegerFromRange(15, 200),
  comments: Array.from({length: randomIntegerFromRange(1, 15)}, generateComments),
});

export {generatePosts};
