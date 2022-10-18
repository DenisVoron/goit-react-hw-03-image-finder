import { Component } from 'react';
//import PropTypes from 'prop-types';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dna } from  'react-loader-spinner'
//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { SectionApp } from './SectionApp/SectionApp';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonMore } from './Button/Button';

//import css from './Loader.module.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29561801-8060ff7959275b65131112eea';
const SETTINGS_URL = 'image_type=photo&orientation=horizontal&per_page=12';
//https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12


export class App extends Component {
  state = {
    searchData: '',
    images: [],
    totalHits: 0,
    imagesOnPage: 0,
    page: 1,
    loading: false,
  };


  componentDidUpdate(prevProps, prevState) {

    if (this.state.searchData !== prevState.searchData) {
      console.log(prevState.searchData);

      this.setState({ loading: true });
  
      fetch(`${BASE_URL}?q=${this.state.searchData}&page=${this.state.page}&key=${API_KEY}&${SETTINGS_URL}`)
        .then(response => response.json())
        .then(({ hits, totalHits }) => {

          if (hits.lenght === 0) {
            this.setState({ images: [], imagesOnPage: 0, totalHits: 0 });
            return Promise.reject(
              new Error(`There is no image with name ${this.state.searchData}`)
            );
          }

          console.log(this.state.page);
          console.log(this.state.visible);
          const arrayOfImages = this.createArrayOfImages(hits);

          this.setState({
            images: arrayOfImages,
            totalHits,
            imagesOnPage: hits.length,
            loading: true
          })
        })
        .finally(this.setState({
          loading: false
        }));
      //console.log(this.state.visible);
    };


    if (this.state.page > prevState.page) {
      console.log(prevState.searchData);

      this.setState({ loading: true });
  
      fetch(`${BASE_URL}?q=${this.state.searchData}&page=${this.state.page}&key=${API_KEY}&${SETTINGS_URL}`)
        .then(response => response.json())
        .then(({ hits }) => {

          const arrayOfImages = this.createArrayOfImages(hits);
          console.log(hits);
          this.setState(prevState => {
            return { images: [...prevState.images, ...arrayOfImages] };
          });

          this.setState({
            imagesOnPage: this.state.images.length,
          });
        })
        .finally(this.setState({ loading: false, visible: false }));
    };
  };



  handleFormSubmit = searchData => {
    this.setState({ searchData, page:1 });
    console.log(searchData)
  }

  nextFetch = () => {
    this.setState(prevState => {
      console.log(this.state.page);
      return { page: prevState.page + 1 };
    });
  };

  createArrayOfImages = data => {
    const arrayOfImages = data.map(element => ({
      id: element.id,
      webformatURL: element.webformatURL,
      largeImageURL: element.largeImageURL,
    }));
    return arrayOfImages;
  };



  render() {
    const {
      images,
      imagesOnPage,
      totalHits
    } = this.state;

    return (
      <SectionApp>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} />

        {imagesOnPage >= 12 && imagesOnPage < totalHits && (
          <ButtonMore
            onClick={this.nextFetch}
          />
        )}
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
        <Dna
          visible={this.state.loading}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          draggable
        />
      </SectionApp>
    );
  }
}



//export default App;

