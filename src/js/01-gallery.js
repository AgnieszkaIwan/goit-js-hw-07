import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

let galleryEl = document.querySelector(".gallery");

for (const item of galleryItems) {
  galleryEl.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
  );
}

// galleryEl.addEventListener(“click”, (event) => {
//   event.preventDefault();
//   const box = basicLightbox.create(`<img src=“${event.target.dataset.source}“>`);
//   box.show();
// });
// const rootEl = document.getElementById("app");

// rootEl.addEventListener("click", (ev) => {
//   ev.preventDefault();
// });
