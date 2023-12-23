import axios from 'axios';

//апи ключ до TheCatApi

//назва бібліотеки,куди відправляємо запит та особистий ключ

//отримуємо проміс всієї колекції порід котів
function fetchBreeds() {
  return axios.get(
    `axios.get(https://pixabay.com/api/?key=41255636-c4f744f2bee1451fa093ac625&q=${input}&image_type=photo&orientation=horizontal&safesearch=true`
  );
}

//отримуємо проміс картинок та інформацію про котів
// function fetchCatByBreed(breed_ids) {
//   // console.log(breed_ids);
//   return axios.get(https://pixabay.com/api/?key=41255636-c4f744f2bee1451fa093ac625&q=ty(те що вводить користувач)&image_type=photo&orientation=horizontal&safesearch=true
//     `https://api.thecatapi.com/v1/images/search?breed_ids=${breed_ids}`
//   );
// }

//експортуємо дані на сторінку index.js
export { fetchBreeds, fetchCatByBreed };
