import React, { Component } from 'react';
import ListBooks from './components/ListBooks';
import Search from './components/Search';
import * as BooksAPI from './utils/BooksAPI';
import { Route } from 'react-router-dom';


class BooksApp extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  updateBookShelf = (book, shelfTitle) => {
    const bookFromState = this.state.books.find(b => b.id === book.id);
    if (bookFromState) {
      bookFromState.shelf = shelfTitle;
      BooksAPI.update(book, shelfTitle)
      .then(this.setState(currentState => ({
        books: currentState.books
      })))
    } else {
      book.shelf = shelfTitle;
      BooksAPI.update(book, shelfTitle)
      .then(this.setState(prevState => ({
        books: prevState.books.concat(book)
      })))
    }
  };

  render = () => {
    return (
      <div className="app">
        {/*Search Page*/}
        <Route path='/search' render={() => (
          <Search
          books = {this.state.books}
          onUpdateBookShelf = {this.updateBookShelf}
          />
        )} />
        {/*Books Page*/}
        <Route exact path='/' render={() => (
          <ListBooks
          books = {this.state.books}
          onUpdateBookShelf = {this.updateBookShelf}
          />
        )} />    
      </div>
    );
  }
  
}
export default BooksApp;