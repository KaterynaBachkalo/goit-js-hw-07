import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryImages = document.querySelector(".gallery");
galleryImages.addEventListener("click", onClickOpenLargeImg);
let instance;

const markup = galleryItems
  .map(
    ({ original, preview, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");
galleryImages.insertAdjacentHTML("beforeend", markup);

function onClickOpenLargeImg(event) {
  event.preventDefault();
  if (!event.target) {
    return;
  }
  instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      closable: true,
    }
  );
  instance.show();
  window.addEventListener("keydown", onKeyCloseImgByEsc);
}

function onKeyCloseImgByEsc(event) {
  if (event.code === "Enter") {
    event.preventDefault();
  } else if (event.code === "Escape") onCloseLargeImg();
}

function onCloseLargeImg() {
  window.removeEventListener("keydown", onKeyCloseImgByEsc);
  instance.close();
}
