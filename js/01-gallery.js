import { galleryItems } from "./gallery-items.js";
// Change code below this line

let anInstance = {};
const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createImageGallery(galleryItems);

function createImageGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `;
    })
    .join("");
}

galleryEl.innerHTML = galleryMarkup;

galleryEl.addEventListener("click", onClickGalleryItem);

function onClickGalleryItem(event) {
  event.preventDefault();

  const isOnImageClick = event.target.classList.contains("gallery__image");
  if (!isOnImageClick) {
    return;
  }

  document.addEventListener("keydown", onESCpressed);
  const getLargeImageUrl = event.target.dataset.source;
  showFullImage(getLargeImageUrl);
}

function showFullImage(imageLargeUrl) {
  anInstance = basicLightbox.create(
    `
  <img src="${imageLargeUrl}">
  `,
    {
      onClose: removeOnEscPressed,
    }
  );
  anInstance.show();
}

function removeOnEscPressed() {
  document.removeEventListener("keydown", onESCpressed);
}

function onESCpressed(event) {
  if (event.code == "Escape") {
    anInstance.close();
    removeOnEscPressed();
  }
}
