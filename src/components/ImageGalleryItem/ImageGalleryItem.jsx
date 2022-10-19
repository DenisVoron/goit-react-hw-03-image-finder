import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, openModal }) => {
    console.log(openModal);
    return (
        <li  className={css.ImageGalleryItem}>
            <img className={css.ImageGalleryItemImage} src={image.webformatURL} alt=""  onClick={openModal}/>
        </li>
    );
}