import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

function createMarkupGallery(galleryItems) {
   return galleryItems.map(item => `<div class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</div>`
  ).join("");
}
const markupGallery = createMarkupGallery(galleryItems);
galleryEl.insertAdjacentHTML("afterbegin", markupGallery)

const onClick = (e) => {
  e.preventDefault();
  if (e.target.className === "gallery__image") {
    const sizeChahge = basicLightbox.create(`
    <img src=${e.target.dataset.source} width="" height="">
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














// Створи галерею з можливістю кліку по її елементах і 
// перегляду повнорозмірного зображення у модальному вікні.
// Подивися демо відео роботи галереї.

//  Розбий його на декілька підзавдань:

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems 
// і наданого шаблону елемента галереї.
// 2. Реалізація делегування на div.gallery і отримання url великого зображення.
// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) 
// файли бібліотеки.
// 4. Відкриття модального вікна по кліку на елементі галереї. 
// Для цього ознайомся з документацією і прикладами.
// 5. Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.
//  Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.