//підключаємо імпортовані файли та бібліотеки
import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';

const API_Key = '?key=41255636-c4f744f2bee1451fa093ac625';
const BASE_URL = 'https://pixabay.com/api/';

const getForm = document.querySelector('.search-form');
const getGallery = document.querySelector('.gallery');

getForm.addEventListener('submit', onSearchImages);

function onSearchImages(event) {
  event.preventDefault();

  const { searchQuery } = event.currentTarget.elements;

  getImages(searchQuery.value)
    .then(data => {
      console.log(data.data.hits);
      if (data.data.hits !== []) {
        return getGallery.insertAdjacentHTML(
          'beforeend',
          createMarkUp(data.data.hits)
        );
      } else {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      getForm.innerHTML = '';
      // setTimeout(() => {
      //   .innerHTML = '';
      // }, 5000);
    });
}

async function getImages() {
  return await axios(
    BASE_URL +
      API_Key +
      `&q${getForm}=&image_type=photo&orientation=horizontal&safesearch=true`
  );
}

function createMarkUp(arr) {
  console.log(arr);
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<div class="photo-card">
  <img src="${
    (webformatURL, largeImageURL)
  }" alt="${tags}" loading="lazy" width='450px' hight='450px' />
  <div class="info">
  <p class="info-item">
      <b>Likes ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${downloads}</b> 
    </p>
  </div>
</div>`
    )
    .join('');
}

// getButton.addEventListener('submit', onSubmit);
