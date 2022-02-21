function countInteger (minNumber, maxNumber) {
  let min;
  let max;

  if (minNumber < 0 || maxNumber < 0) {
    return 'число меньше 0';
  }
  if (minNumber > maxNumber) {
    min = maxNumber;
    max = minNumber;
  } else {
    min = minNumber;
    max = maxNumber;
  }
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

countInteger(1,2);

function lengthComment(text, maxLength) {
  return text.length > maxLength ? false : true;
}
lengthComment('это была сложная задача, но возможно я справился', 70);
//Я подглядел решение тут https://learn.javascript.ru/task/random-int-min-max
