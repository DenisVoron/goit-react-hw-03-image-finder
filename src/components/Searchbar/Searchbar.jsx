/*const BASE_URL = 'https://pixabay.com/api/?key=29561801-8060ff7959275b65131112eea&q=yellow+flowers&image_type=photo';
const API_KEY = '29561801-8060ff7959275b65131112eea';
const SETTINGS_URL = 'per_page=40&image_type=photo&orientation=horizontal&safesearch=true';

//https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12*/

import { Component } from 'react'
//import PropTypes from 'prop-types'
import { toast } from 'react-toastify';

import css from './Searchbar.module.css';

export class Searchbar extends Component {
    state = {
        searchData: ''
    }

    handleDataChange = event => {
        this.setState({ searchData: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.searchData.trim() === '') {
            toast.warn('Введите данные загрузки')
            return;
        }

        this.props.onSubmit(this.state.searchData);
        this.setState({ searchData: '' });
        console.log(this.state.searchData)
    }


  render() {
      return (
          <header className={css.Searchbar} onSubmit={this.handleSubmit}>
              <form className={css.SearchForm}>
                  <button type="submit" className={css.SearchFormButton}>
                      <span className={css.SearchFormButtonLabel}>Search</span>
                  </button>

                  <input
                      className={css.SearchFormInput}
                      type="text"
                      name="searchData"
                      value={this.state.searchData}
                      onChange={this.handleDataChange}
                      autoComplete="off"
                      autoFocus
                      placeholder="Search images and photos"
                  />
              </form>
          </header>
      );
    }
}
