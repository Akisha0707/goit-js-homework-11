import axios from 'axios';
//апи ключ до TheCatApi
const API_Key =
  'live_gqCDtXROVBYQEPNW3vLvgVi7ZXwNuvMNOnquLQrpKSOZsOhw5jDghmYIy1yEpyZw';

//назва сайту,куди відправляємо запит
const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
axios.defaults.headers.common['x-api-key'] =
  'live_gqCDtXROVBYQEPNW3vLvgVi7ZXwNuvMNOnquLQrpKSOZsOhw5jDghmYIy1yEpyZw';

//отримуємо проміс всієї колекції порід котів
function fetchBreeds() {
  return axios.get('https://api.thecatapi.com/v1/breeds');
}

//отримуємо проміс картинок та інформацію про котів
function fetchCatByBreed(breed_ids) {
  // console.log(breed_ids);
  return axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breed_ids}`
  );
}

//експортуємо дані на сторінку index.js
export { fetchBreeds, fetchCatByBreed };
