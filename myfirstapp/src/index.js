import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import books from './books.json';
const formatter = new Intl.NumberFormat('en-GB', {
style: 'currency',
currency: 'GBP'
})
const book = books[0];
let {id, volumeInfo: {title, authors, description}, saleInfo: {listPrice: {amount}}} = book;
const element = <Fragment>
<h1 id={id}>{title} = {formatter.format(amount)}</h1>
</Fragment>;
ReactDOM.render(element,document.getElementById('root'));




/* './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';*/

/*const name= 'Tracey'

function Greeting (user) { 
    if (user) {
        return <h1>{name}'s Reading List </h1>;
    }
    return <h1> Just a Reading List</h1>
}
console.log(Greeting(name));
ReactDOM.render(Greeting(name), document.getElementById('root'));*/
//serviceWorker.unregister();



// above we have created a normal JS function that checks if 'user' is a value, then i want to returns '{name}reading list' 
//if it is not than return just a reading list 
/*const element = <h1>{name}'s Reading List </h1>
console.log(element);
ReactDOM.render(element, document.getElementById('root'));*/


//ReactDOM.render(
//    <React.StrictMode>
//        <App />
//   </React.StrictMode>,
 //   document.getElementById('root'));






/*
/* import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'*/

//<---------------------------------jsx expression rendered inside the real dom------------------------>
/*const element = <h1>Welcome to the Book Library</h1>;
^^above we have a JSX expression, the type is set to 'H1' and children props is ' Welcome to the book library'
console.log(element);  //- the result of the expression is a React Element which is part of the virtual DOM 
 now we want to render this inside the real DOM, hence why we imported ReactDom at the top.
as the first arument we want to pass the elment we want to render, so here is our element object, the second argument specifies where in the realdom you want to Render this
ReactDOM.render(element, document.getElementById('root'));
 so the ReactDOM will get a reference to the document.get.... and render the react element inside of the const element */
/*
 const name = 'Tracey';
 function Greeting(user = false) {
 if (user) {
 return <h1>{name}'s Reading List</h1>;
 }
 return <h1>Just a Reading List</h1>;
 }
 console.log(Greeting(name));
 ReactDOM.render(Greeting(),document.getElementById('root'));*/
/*
 import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import books from './books.json';
const formatter = new Intl.NumberFormat('en-GB', {
style: 'currency',
currency: 'GBP'
})
const book = books[0];
let {id, volumeInfo: {title, authors, description}, saleInfo: {listPrice: {amount}}} = book;
const element = <Fragment>
<h1 id={id}>{title} = {formatter.format(amount)}</h1>
</Fragment>;
ReactDOM.render(element,document.getElementById('root'));*/

