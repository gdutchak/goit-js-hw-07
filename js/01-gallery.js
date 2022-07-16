import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery')
const itemGallery = createItemOfGallery(galleryItems)
galleryRef.innerHTML = itemGallery

function createItemOfGallery(item) {
    return item.map(item => {
        return `<a class="gallery__link" href="${item.original}"
    ><img class="gallery__image" src="${item.preview}" 
    data-source="${item.original}"alt="${item.description}"/></a>`
    }).join('')
}

galleryRef.addEventListener('click', (event) => {
    event.preventDefault()
    const instance = basicLightbox.create(`
    <div class="modal">
       <img src="${event.target.dataset.source}" width="800" height="600">
    </div>
`).show()
})

