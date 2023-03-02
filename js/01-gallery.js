import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');
const createGallery = createImageItems();

gallery.insertAdjacentHTML('beforeend', createGallery);

function createImageItems (){
    return galleryItems.map(({preview, original, description}) => 
    `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt='${description}'
        />
      </a>
    </div>`).join('')
}

gallery.addEventListener('click', onModalClick);


function onModalClick(e){
    e.preventDefault();
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`,{
    onShow: () => document.addEventListener('keydown', onEscClose),
    onClose: () => document.removeEventListener('keydown', onEscClose),
})
instance.show();
function onEscClose(e){
if (e.code==="Escape") {
    instance.close();
}
}

}


