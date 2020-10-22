import React,{useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/Header';
import BookList from './Components/BookList';
import Search from './Components/Search';
import Book from './Components/Book';
import About from './Pages/About';
import data from './models/books.json';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [books,setBooks] = useState(data);
  const [keyword, setKeyword ] = useState('');
  const [bookcase,setBookcase] = useState([]);
  setBooks([...bookcase, ...]);
  console.log('The book ${title})


  function addBook (title,id) {
    const newBookList = books.filter(book => book.id !== id);
    const chosenBook = books.filter(book => book.id === id);
    setBooks(newBookList);
    setBookcase(chosenBook);
    console.log ('The book ${title} was clicked')
  }

  async function findBooks (term) {
    const results = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${term}&filter=paid-ebooks&print-type=books&projection=lite`
      ).then(res => res.json());
    setBooks(results.items);
  }

  return(
    <Router>
      <Route exact path="/" render = {() => (
        <React.Fragment>
          <Header />
          <Search findBooks= {findBooks} keyword={keyword} setKeyword={setKeyword}/>
          <BookList books={books} addBook={addBook} />
        </React.Fragment>
      )} />
      
      <Route exact path="/bookcase" render = {() => (
      <React.Fragment>
        <Header />
        <p> Next Page</p>/>
      </React.Fragment>
    )} />

      <Route exact path="/book" render = {() => (
      <React.Fragment>
        <BookList />
        <p> Next Page</p>/>
      </React.Fragment>
    )} />
    
    <Route exact path="/about" render = {() => (
      <React.Fragment>
        <Header />
        <About />
      </React.Fragment>
    )} />
  </Router>
  );
}

export default App;



















/*import React, { useState } from 'react';
import Book from './Components/Book';
import data from './models/books.json';

const App = (props) => {
const [books] = useState(data);
return (
<div>
{books.map(book => <Book key={book.id} book={book}/>)}
</div>
);
}*/





/*import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header';
import BookList from './Components/BookList';
import data from './books.json';

const App = (props) => {
  const [books, setBooks] = useState(data);

  function addBook (title,id) {
    const newBookList = books.filter(book=> book.id !==id);
    setBooks(NewbookList);
    console.log('The book ${title} was clicked')
  }


  return (
    <>
    <Router>
      <Route exact path="/" render={() => (
      <React.Fragment>
        <Header />
        <BookList books ={books} addbook={addbook}/>
      </React.Fragment>
  )}/>

  <Route exact path="/bookcase" render={() => (
    <React.Fragment>
      <Header />

    </React.Fragment>
  )}/>

  </Router>
  </>
  );
  }
  export default App;*/

