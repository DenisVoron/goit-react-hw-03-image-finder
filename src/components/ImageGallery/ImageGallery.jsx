import css from './ImageGallery.module.css';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, openModal }) => {
    console.log(openModal);
    //console.log(images);
    return (
        <ul className={css.ImageGallery}>
            {images.map((image, id) => (
                <ImageGalleryItem key={id} image={image} openModal={openModal} />
            ))}
        </ul>
    );
};