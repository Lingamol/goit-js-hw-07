import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryImgListRef = document.querySelector("ul.gallery");

const galleryItemsMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt="${description}" />
</a>`;
  })
  .join("");

galleryImgListRef.insertAdjacentHTML("afterbegin", galleryItemsMarkup);
var lightbox = new SimpleLightbox(".gallery a", {
  caption: true,
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  /* options */
});

console.log(galleryItems);
