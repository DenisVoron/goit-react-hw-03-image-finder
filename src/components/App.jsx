import { Component } from 'react';
//import PropTypes from 'prop-types';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29561801-8060ff7959275b65131112eea';
const SETTINGS_URL = 'image_type=photo&orientation=horizontal&per_page=12';
//https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12


export class App extends Component {
  state = {
    searchData: '',
    images: [],
    page: 1,
    loading: false
  };


  handleFormSubmit = searchData => {
    this.setState({ searchData });
    console.log(searchData)
  }

  
  componentDidMount() {
    this.setState({ loading: true });
  
    fetch(`${BASE_URL}?q=${this.state.searchData}&page=1&key=${API_KEY}&${SETTINGS_URL}`)
      .then(response => response.json())
      .then(({hits}) => {

        const arrayOfImages = this.createArrayOfImages(hits);
        console.log(hits);
        this.setState(prevState => {
          return { images: [...prevState.images, ...arrayOfImages] };
        })
      })
      .finally(this.setState({ loading: false }));
  };


  createArrayOfImages = data => {
    const arrayOfImages = data.map(element => ({
      tags: element.tags,
      webformatURL: element.webformatURL,
      largeImageURL: element.largeImageURL,
    }));
    return arrayOfImages;
  };



  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />

        {/*this.state.loading && <p>Loading...</p>*/}
        {/*this.state.images && (
          <ul>
            {this.state.images.hits.map(({id, webformatURL})=>(
            <li key={id}>
              <p>тут будет фото</p>
              <img src={webformatURL} alt="" />
            </li>
            ))}
          </ul>
            )*/}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          draggable
        />
      </div>
    );
  }
}



//export default App;

