import { galleryItems } from './gallery-items.js';

// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createMarkupGallery(galleryItems) {
    return galleryItems.map(item => `<div class="gallery__item">
<a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a>
</div>`
    ).join("");
}
const markupGallery = createMarkupGallery(galleryItems);
galleryEl.insertAdjacentHTML("afterbegin", markupGallery)

const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});


const onClick = (e) => {
  e.preventDefault();
  if (e.target.className === "gallery__image") {
    const sizeChahge = basicLightbox.create(`
    <img src=${e.target.dataset.source} width="800" height="600">
`,
      {
        onShow: () => {
          window.addEventListener("keydown", closeModal);
        },
        onClose: () => {
          removeEventListener("keydown", closeModal);
        },

    }
    )

    sizeChahge.show()
    
    function closeModal(e) {
      if (e.code === "Escape") {
        sizeChahge.close();
      }
    }
  }
}

galleryEl.addEventListener('click', onClick);
