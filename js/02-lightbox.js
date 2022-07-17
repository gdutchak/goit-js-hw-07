import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery')
const galleryItem = createGallery(galleryItems)
galleryList.insertAdjacentHTML("beforeend", galleryItem)

function createGallery(image) {
  return image.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" 
  alt="${description}"/>
</a>` }).join('')
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionsDelay: 250,
});
