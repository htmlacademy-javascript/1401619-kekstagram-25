function fullsizepicture (picturefullsize) {
  const bigPicture = document.querySelector('.big-picture');
  const cancelPicture = document.querySelector('#picture-cancel');
  const socialCommentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');

  picturefullsize.forEach((element) => {
    element.addEventListener('click', (evt) => {
      evt.preventDefault();
      bigPicture.classList.remove('hidden');
      bigPicture.querySelector('.big-picture__img').children[0].src = element.querySelector('img').src;
      bigPicture.querySelector('.likes-count').textContent = element.querySelector('.picture__likes').textContent;
      bigPicture.querySelector('.comments-count').textContent = element.querySelector('.picture__comments').textContent;
      socialCommentCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');
      document.body.classList.add('modal-open');
    });
  });


  cancelPicture.addEventListener('click', ()=> {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27){
      bigPicture.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });
}

export {fullsizepicture};
