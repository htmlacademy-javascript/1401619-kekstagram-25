function randomIntegerFromRange (minNumber, maxNumber) {
  let min;
  let max;

  if (minNumber < 0 || maxNumber < 0) {
    return 'число меньше 0';
  }
  if (minNumber > maxNumber) {
    min = maxNumber;
    max = minNumber;
  }
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

randomIntegerFromRange(1,2);

function lengthComment(text, maxLength) {
  return text.length >= maxLength;
}

lengthComment('это была сложная задача, но возможно я справился', 70);


const PHOTO_ID = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

const URL_OF_PICTURE = 'photos/{{i}}.jpg';

const DESCRIPTIONS_OF_PHOTO = [
  'Дом который построил Джек',
  'Маски шоу',
  'Операция Ы',
  'Разумное, доброе, вечное и кошки',
  'Апетитный хавчик',
  'Асфальтоукладчик',
  'Как же скучно я живу',
  'Дикие коты',
  'Пушкинская осень',
  'Вечное сияние чистого разума',
  'Тарас и Бульба',
  'Овощебаза',
  'Синхрофазатрон',
  'Пердоманокль',
  'Моя кошка',
  'Вдруг как в сказке скрипнула дверь...',
  'Бульбазавр',
  'Это что за покемон?',
  'То да сё, пятое десятое',
  'Товарищи',
  'Партия зовёт',
  'Птичка упархнула',
  'Шо то шо это',
  'Ну ниче так',
  'Косоглазие это не приговор',
];

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


const getRandomArrayElement = (elements) => ({
  return (elements([randomIntegerFromRange(0, elements.length - 1)])
})

const createComment = PHOTO_ID.map((id) => {
  return {
    id: PHOTO_ID[id],
    url: 'photos/${id + 1}.jpg'
    description: DESCRIPTIONS_OF_PHOTO[id],
    likes: randomIntegerFromRange(15, 200),
    comments: {
      id: PHOTO_ID[id],
      avatar: 'img/avatar-'+ randomIntegerFromRange(1, 6) + '.svg',
      message: getRandomArrayElement(COMMENTS_FROM_USERS),
      name: getRandomArrayElement(USER_NAMES)
    }
  };
});

createComment();
