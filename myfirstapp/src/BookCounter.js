import React, {useState} from 'react';
import '.BookCounter.css';
const BookCounter = (props) => {

  const [count, setCount] = useState(0);

  return (
    <div className="booklist">
    <h1>{props.library.name}'s Books ({count})	&#8595;</h1>
    <button onClick={() => setCount(count + 1)}>Count Books</button>
      <ul>
        <li>Half of a Yellow Sun</li>
        <li>Black Leopard, Red Wolf</li>4
        <li>Born a Crime</li>
        <li>Americanah</li>
        <li>Ghana Must Go</li>
      </ul>
    </div>
  );
}
export default BookCounter;

/*var book_lists={
  book_title:"Half of a Yellow Sun",
  book_description: "A historical fiction that follows two sisters who are caught up in the outbreak of the Nigerian Civil War.",
  book_price:"7.95"
};
for (var property in book_lists) {
   console.log(property,":",book_lists[property]);*/
}


/*import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import BookCounter from './BookCounter';
const element = <Fragment>
<h1>Welcome to My Library</h1>
<BookCounter library={{name:"Sarah",theme:"Modern"}}/>
</Fragment>;
ReactDOM.render(element,document.getElementById('root'));*/