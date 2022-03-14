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

function lengthComment(text, maxLength) {
  return text.length >= maxLength;
}

lengthComment('это была сложная задача, но возможно я справился', 70);

export {randomIntegerFromRange, lengthComment};
