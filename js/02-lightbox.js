import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const createGallery = createGalleryItems();
gallery.insertAdjacentHTML(`beforeend`, createGallery)


function createGalleryItems(){
return galleryItems.map(({preview, original, description}) =>
    `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`).join('')
}

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
 });

console.log(galleryItems);


