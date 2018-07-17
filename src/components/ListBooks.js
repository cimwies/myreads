import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sortBy from 'sort-by'
import '../BooksApp.css';
import { Link } from 'react-router-dom';
import Book from './Book';


const shelves = [
    {
        key: 'currentlyReading',
        name: 'Currently Reading'
    },
    {
        key: 'wantToRead',
        name: 'Want To Read'
    },
    {
        key: 'read',
        name: 'Read'
    }
];

class ListBooks extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    }


    render = () => {

        const { books, onUpdateBookShelf } = this.props

        function getBooks(shelfKey) {
            return books.filter(book => book.shelf === shelfKey).sort(sortBy('authors'));
        }

    return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    { shelves.map((shelf) => (
                        <div key={shelf.key} className="bookshelf">
                            <h2 className="bookshelf-title">{shelf.name}</h2>
                            { getBooks(shelf.key).length === 0 ? (
                                <div>
                                  <h4>Sorry, no books in this shelf</h4>
                                </div>
                            ) : (
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        { getBooks(shelf.key).map((book) => (
                                            <li key = { book.id }>
                                                <Book key = { book.title }
                                                book = { book }
                                                updateBookShelf = { onUpdateBookShelf }/>
                                            </li>   
                                          ))}
                                    </ol>
                                </div> 
                            )}
                        </div>
                    )) }
                </div>
            </div>
            <div className="open-search">
                {/*Add a Book Link*/}
                <Link to='/search'>Add a book</Link>
            </div>
        </div>
      );
    }

}

export default ListBooks;