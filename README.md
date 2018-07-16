# MyReads: A Book Tracking App

Udacity FEND Nanodegree Program - Project #7

## Table of Contents

* Specification
* How to view
* Souces used in code
* Info material

### Specification

The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application. 

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

The main page also has a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.




### How to view?

1. Clone the repo using this command:

```sh
git clone https://github.com/cimwies/feedreader-test.git
```

2. Install
* Dependencies: [Node.js](https://nodejs.org/en/) v0.12.7 or above
* Then checkout the project and run:

```sh
npm install
```

3. Running

```sh
npm run serve
```
4. Using the app

With your server running, visit the site: `http://localhost:3000`, and look around for a bit. Move books, search and add new books to read.


## Sources used in Code

* [React JavaScript library](https://reactjs.org/)
* [BooksAPI](https://reactnd-books-api.udacity.com)
* [module: prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html)
* [module: sort-by](https://www.npmjs.com/package/sort-by)
* [module: react-router-dom](https://www.npmjs.com/package/react-router-dom)


## Info material

* [CSS-Tricks: React State From the Ground Up](https://css-tricks.com/react-state-from-the-ground-up/)
* [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)
* [CSS-Tricks: React Forms: Using Refs](https://css-tricks.com/react-forms-using-refs/)
