import React from 'react';
import Product from './Product'

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicked:false};
    }
    render () {
        return (
            <button
                className="button-styles"
                style={{
                    backgroundColor:"red",
                    color: "white",
                    border: "0",
                    padding:"10px 20px",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    fontSize: "1.1em"
                }}
                onClick= {() => this.setState({ clicked: true})}
            >
            {this.state.clicked ? 'Item added to basket': 'Add to basket'}
            </button>
        )
    }
}

export default Button;

// writing compnenets with these classes is not recommended anymore , this is just to recognise them,
// the recomended way of making components is using React Hooks 