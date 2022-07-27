import { galleryItems } from "./gallery-items.js";
import modalTemplate from "./modalTemplate.js";
// Change code below this line
const galleryImgListRef = document.querySelector("div.gallery");

const galleryItemsMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

galleryImgListRef.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

function handelClickImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  // console.log(event.target.alt);
  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }

  const instance = basicLightbox.create(
    modalTemplate(event.target.dataset.source, event.target.alt),
    {
      onShow: () => window.addEventListener("keydown", onEscKeyPress),
      onClose: () => window.removeEventListener("keydown", onEscKeyPress),
    }
  );
  instance.show();
}

galleryImgListRef.addEventListener("click", handelClickImg);

console.log(galleryItems);
