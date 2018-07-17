import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import sortBy from 'sort-by'
import * as BooksAPI from '../utils/BooksAPI';
import Book from './Book';


class Search extends Component {

    navigate() {
        this.props.history.replaceState(null, "/");
    }

    state = {
        query: '',
        results: []
    }

    static propTypes = {
        onUpdateBookShelf: PropTypes.func.isRequired
    }

    updateQuery(query) {
        if(query.length > 0 ) {
            this.setState(() => ({
            results: [],
            query: query.trim()
        }))
            this.bookSearch(query)
        }
        else {
            this.clearQuery()
        }
    }

    clearQuery = () => {
        this.setState({
        query: '',
        results: []
      })
    }

    bookSearch(query) {
        if (query.length > 0)
            BooksAPI.search(query)
            .then(searchResults => {
                if(query === this.state.query)
                    this.setState(currentState => ({ 
                    results: this.updateExistingBookShelves(searchResults)
                 }))
            }
        );
    }

   updateExistingBookShelves(searchResults) {
      if(!searchResults.error) {
          const myBooks = this.props.books
          const addToState = searchResults.filter((result) => myBooks.find(b => {
              if(b.id === result.id) {
                  result.shelf = b.shelf
                  return result
                } else {
                  return null
                }
          }))
      myBooks.concat(addToState)
      return searchResults.sort(sortBy('authors'))
      }
  }


  render = () => {

      const { query, results } = this.state;
      const { onUpdateBookShelf } = this.props;

      return(
          <div className="search-books">
              <div className="search-books-bar">
                  <div className="return-home">
                      <Link to="/">Return home</Link>
                  </div>
                  <div className="search-books-input-wrapper">
                      <input
                          type = "text"
                          placeholder = "Search by title, author or subject"
                          value = {this.state.query}
                          onChange = {(event) => this.updateQuery(event.target.value)}
                      />
                  </div>
                  <button
                      className="close-search"
                      onClick={ this.clearQuery }>
                  </button>
              </div>
              <div className="search-books-results">
                  <ol className="books-grid">
                      { results ? (
                          results.map((book) => (
                          <li key = { book.id }>
                              <Book
                              key={book.title}
                              book={book}
                              updateBookShelf={onUpdateBookShelf} 
                              />
                          </li>   
                          ))
                      ) : (
                          <h4>No results for, "{query}"</h4>
                      )}
                  </ol>
                  <div className="return-home">
                      <Link to="/">Return home</Link>
                  </div>
              </div>
          </div>
      );
  }

}

export default Search;