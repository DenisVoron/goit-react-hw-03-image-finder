

export const ImageGallery = ({ images }) => {
    console.log(images);
    return (<ul className="gallery">
        {images.map(({id, webformatURL}) => (
            <li key={id} className="gallery-item">
                <img src={webformatURL} alt="" />
            </li>
        ))}
    </ul>)
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