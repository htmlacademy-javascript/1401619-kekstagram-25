function render (generatepictures) {

  const picturesTemplateId = document.querySelector('#picture').content;
  const picturesDepot = document.querySelector('.pictures');
  const picturesDocumentFragment = document.createDocumentFragment(); //создаём фрагмент

  generatepictures.forEach((elem) =>{
    const pictureElement = picturesTemplateId.cloneNode(true);
    pictureElement.querySelector('img').src = elem.url;
    pictureElement.querySelector('.picture__likes').textContent = elem.likes;
    pictureElement.querySelector('.picture__comments').textContent = elem.comments.length;
    picturesDocumentFragment.appendChild(pictureElement);
  });

  picturesDepot.appendChild(picturesDocumentFragment);
}

export {render};
