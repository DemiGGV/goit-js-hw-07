import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createImageGallery(galleryItems);

function createImageGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
    `;
    })
    .join("");
}

galleryEl.innerHTML = galleryMarkup;

galleryEl.addEventListener("click", onClickGalleryItem);

let imgGallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  showCounter: false,
});

function onClickGalleryItem(e) {
  imgGallery.on("show.simplelightbox");
  imgGallery.on("error.simplelightbox", function (e) {
    console.log("error in SimpleGallery =>", e);
  });
}
