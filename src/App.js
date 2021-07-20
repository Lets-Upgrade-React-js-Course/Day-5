import React from 'react'
import './App.css';
import {Button} from "react-bootstrap";
import { Card, CardImg, CardProductBottomDetails, CardProductDescription, CardProductName} from "./Styles";
import product_card from "./api/Products.json"
function App() {
  const Items = product_card.map((item,id) => (
    <Card key={id}>
          <CardImg alt="Card image" className="card-img-top" src={item.thumb} />
            <div className="card-block">
              <CardProductName href="/" className="card-title">{item.product_name}</CardProductName>
              <CardProductDescription className="card-text">{item.description}</CardProductDescription>
              <CardProductBottomDetails className="product-bottom-details">
                <Button style={{backgroundColor:'gold',color:'black',border:'none',margin:'auto'}}>Click for {item.button}</Button>
              </CardProductBottomDetails>
            </div>
      </Card>
));
  return (
    <div>
      <nav className="navbar navbar-expand-lg text-white bg-dark">
      <a className="navbar-brand text-warning" href="/">Walmart</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link text-white" href="/">Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/">About Us</a>
          </li>
          <li className="nav-item dropdown">
            <a href="/" className="nav-link text-white">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/">Meeting</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
    <div className="jumbotron bg-white">
      <h1 className="display-4">Explore and Purchase 
      more!!</h1>
      <p className="lead">
      India's biggest online store for <br/> Mobiles, Fashion (Clothes/Shoes), Electronics, Home Appliances, Books, Home, Furniture, Grocery, Jewelry, Sporting goods, ...
      </p>
      <hr className="my-4" />
      <p>
      Each Wal-Mart store should reflect the values of its customers and support the vision they hold for their community.
      </p>
      <a className="btn btn-warning btn-lg" href="/" role="button"
        >Walmart For Everything</a
      >
    </div>
    <div className="bg-dark text-center">
      <p className="display-4 text-white p-4">Discover the amazing new app</p>
      <p className="text-white">
      Make mobile shopping easier with the Walmart Mobile App.Simplify your shopping with the Walmart app, which offers a variety of features.
      </p>
      <div className="row  p-4">
        <div className="col-6 text-right">
          <button className="btn btn-warning btn-lg">Play Store</button>
        </div>
        <button className="btn btn-warning btn-lg">App Store</button>
        <div className="col-6 text-center"></div>
      </div>
    </div>
    <section className="contact bg-dark ">
      <div className="container ">
        <h2 className="text-white">
          Here are Few Exciting Products!
        </h2>
        <div style={{display:'flex'}}>
          {Items}
        </div>
      </div>
    </section>
    
    <section className="footer bg-warning text-dark">
      <p className="lead container">Contact us at Instagram</p>
      <p className="lead container">You can react via email too</p>
      <p className="lead container">NO COPYRIGHT</p>
    </section>
    </div>
    

  )
}

export default App;
