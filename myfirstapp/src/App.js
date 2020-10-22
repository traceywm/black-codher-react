import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product'

//Below is an array of products 
/*const products =[

  {
    name: '90s Jacket',
    price:'42.95',
    description:'Trendy Jacket',
    scr:'./media/https://d2h1pu99sxkfvn.cloudfront.net/b0/7617308/651551851_4faafa4f93b4436d915bcdde19c55aec/P8.jpg-jacket.jpeg',  alt:'multi-coloured',
  },

  {
    name: '90s hat',
    price: '22.95',
    description:'Stylish Hat',
    scr:'https://i.pinimg.com/originals/5d/28/79/5d2879464eb3a96707219533e0f09cbf.jpg',
    alt:'Colourful Hat',
    
  },

  {
    name: '90s jewllery',
    price: '92.85',
    description:'Gold Earrings',
    scr:'https://i.pinimg.com/originals/eb/e6/5a/ebe65ac84c6ef077deb4a8a0dd68d2a1.jpg',
    alt:'gold earings',
    
  },

]*/

function App() {
  return (
    <div className="App">
      <Product
        name= '90s Jacket'
        price='42.95'
        description='Trendy Jacket'
        scr='./media/https://d2h1pu99sxkfvn.cloudfront.net/b0/7617308/651551851_4faafa4f93b4436d915bcdde19c55aec/P8.jpg-jacket.jpeg'
        alt="stylish Jacket"
      />
      <Product 
          name='90s hat'
          price= '22.95'
          description='Stylish Hat'
          scr='https://i.pinimg.com/originals/5d/28/79/5d2879464eb3a96707219533e0f09cbf.jpg'
          alt='Colourful Hat'
      />
  
      <Product 
          name= '90s jewllery'
          price= '92.85'
          description='Gold Earrings'
          scr='https://i.pinimg.com/originals/eb/e6/5a/ebe65ac84c6ef077deb4a8a0dd68d2a1.jpg'
          alt='gold earings'
       />
    </div>
  );
}
// above is a functional component 
export default App;


// to get an image from a folder you need to call it like this -->  img="/media/image_name.jpg"