import { Button } from 'bootstrap';
import React from 'react';
import PropTypes from 'prop-types';

const Book = (props)=> {
    let {id, volumeInfo: {title, authors, description}, price} = book;
return (
    <div style = {{border:'dott ed lavender 2.5px'}}>
            <h2> {props.name}</h2>
            <p>{props.price}</p>
            <p>{props.desciption}</p>
            <p>
            <img src={props.src} alt={props.alt}/>
            </p>
<h2>{title}</h2>
<img src = {smallThumbnail || thumbail} alt={title} /> 
<p>{authors ? authors.join (','): 'No authors'}</p>
<h4>{listPrice && listPrice.amount}</h4>
<p className="description">{description}</p>
<Button
    onClick= { ()=> props.addBook (title, id)}
    className="blue-button"
>
    add +
</Button>

</div>
);
}

Book.propTypes = {
    volumeInfo: ProtoTypes.shape({title: PropTypes.string.isRequired}),
    authors: PropTypes.array.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    thumbailimage: PropTypes.string
    };

export default Book;