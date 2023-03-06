import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');


galleryEl.addEventListener('click', event => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
    return;
    };

    const imageLink = event.target.dataset.source;
    
const modalEl = basicLightbox.create(`
    <div class="modal">
        <img src='${imageLink}' width="800" height="600">
    </div>
`);

    modalEl.show();

galleryEl.addEventListener("keydown", event => {
    const isVisible = modalEl.visible();

    if (isVisible && event.key === 'Escape') {
        modalEl.close();
        galleryEl.removeEventListener("keydown", event);
    };
});
});




