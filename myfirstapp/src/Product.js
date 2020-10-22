import React, {useState, useEffect} from 'react';
import Button from "./Button";


function Product (props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title='${count} item in basket';
    },[count]);


    return (
        <div style = {{border:'dotted lavender 2.5px'}}>
            <h2> {props.name}</h2>
            <p>{props.price}</p>
            <p>{props.desciption}</p>
            <p>
            <img src={props.src} alt={props.alt}/>
            </p>
            <p>
                I have added {count} to the basket
            </p>
            <p>
                <button
                onClick= {()=> setCount(count + 1 )}
                >Add Item</button> 
            </p>

        </div>
    )

}

export default Product;