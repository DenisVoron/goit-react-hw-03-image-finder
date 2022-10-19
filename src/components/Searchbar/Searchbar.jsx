import { Component } from 'react'
//import PropTypes from 'prop-types'
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';

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
                      <ImSearch />
                      {/*<span className={css.SearchFormButtonLabel}>Search</span>*/}
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
