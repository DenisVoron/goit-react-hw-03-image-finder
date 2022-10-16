/*const BASE_URL = 'https://pixabay.com/api/?key=29561801-8060ff7959275b65131112eea&q=yellow+flowers&image_type=photo';
const API_KEY = '29561801-8060ff7959275b65131112eea';
const SETTINGS_URL = 'per_page=40&image_type=photo&orientation=horizontal&safesearch=true';

//https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12*/


import React, { Component } from 'react'
//import PropTypes from 'prop-types'

export class Searchbar extends Component {
    state = {
        query: ''
    }

  render() {
      return (
          <header class="searchbar">
              <form class="form">
                  <button type="submit" class="button">
                      <span class="button-label">Search</span>
                  </button>

                  <input
                      class="input"
                      type="text"
                      autocomplete="off"
                      autofocus
                      placeholder="Search images and photos"
                  />
              </form>
          </header>
      );
    }
}
