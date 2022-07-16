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
galleryRef.addEventListener('click', openModalImg)

const instance = basicLightbox.create(`
    <div class="modal">
       <img src="" width="800" height="600">
    </div>
`,
    {
        onShow: (instance) => {
            window.addEventListener('keydown', onEscCode)
        }
        ,

        onClose: (instance) => {
            window.removeEventListener('keydown', onEscCode)
        }
    });

function openModalImg(event) {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") {
        return
    }
    instance.element().querySelector('img').src = event.target.dataset.source
    instance.show()

}

function onEscCode(event) {
    if (event.code === "Escape") {
        instance.close()
        return
    }
}




