import css from './ImageGallery.module.css';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, openModal }) => {
    console.log(openModal);
    console.log(images);
    return (
        <ul className={css.ImageGallery}>
            {images.map((image, id) => (
                <ImageGalleryItem key={id} image={image} openModal={openModal} />
            ))}
        </ul>
    );
};


/*export class ImageGallery extends Component {
    state = {
    images: null
    };


  /*componentDidUpdate(prevProps, prevState) {
      if (prevProps.searchData !== this.props.searchData) {
          console.log('Изменилось имя запроса');

          fetch(`${BASE_URL}?q=${this.props.searchData}&page=1&key=${API_KEY}&${SETTINGS_URL}`)
              .then(response => response.json())
              .then(images => this.setState({ images }));
      };
  }*/
  

    /*render() {
        return (
            <ul className="gallery">
                <li className="gallery-item">
                    <img src="" alt="" />
                </li>
            </ul>
        );
    }
}*/

//export default ImageGallery;


/*<ul className="gallery">
                <li className="gallery-item">
                    <img src="" alt="" />
                </li>
            </ul>*/