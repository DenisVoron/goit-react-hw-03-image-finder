import React, { Component } from 'react';
//import PropTypes from 'prop-types';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29561801-8060ff7959275b65131112eea';
const SETTINGS_URL = 'image_type=photo&orientation=horizontal&per_page=12';

//https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

export class App extends Component {
  state = {
    images: null,
    loading: false
  }


  componentDidMount() {
    this.setState({ loading: true });

    setTimeout(() => {
      fetch(`${BASE_URL}?q=cat&page=1&key=${API_KEY}&${SETTINGS_URL}`)
      .then(response => response.json())
      .then(images => this.setState({ images }))
      .finally(this.setState({ loading: false }));
    }, 2000);
  };



  render() {
    return (
      <div>
        {this.state.loading && <p>Loading...</p>}
        {this.state.images && (
          <ul>
            {this.state.images.hits.map(({id, webformatURL})=>(
            <li key={id}>
              <p>тут будет фото</p>
              <img src={webformatURL} alt="" />
            </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}



//export default App;



/*export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};*/
