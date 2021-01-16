import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg"
          alt="Amazon Banner"
        />
        <div className="home_row">
          <Product
            id="1234567891"
            title="World’s Greatest Books For Growth and Wealth (Set of 4 Books)"
            price={349}
            image="https://images-na.ssl-images-amazon.com/images/I/81GM4Ang38L.jpg"
            rating={5}
          />
          <Product
            id="1234567892"
            title="Think Like a Monk Paperback by Jay Shetty"
            price={388}
            image="https://images-na.ssl-images-amazon.com/images/I/81s6DUyQCZL.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="1234567893"
            title="Apple iPhone 11 Pro Max (64GB) - Space Grey"
            price={99990}
            image="https://images-na.ssl-images-amazon.com/images/I/61tuQdl2yLL._SL1024_.jpg"
            rating={4}
          />
          <Product
            id="1234567894"
            title="Canon EOS M50 24.1MP Camera with 15-45 STM Lens"
            price={54689}
            image="https://images-na.ssl-images-amazon.com/images/I/61HRnUdvv6L._SL1000_.jpg"
            rating={5}
          />
          <Product
            id="1234567895"
            title="Mi Notebook Horizon Edition 14 Intel Core i7"
            price={59999}
            image="https://images-na.ssl-images-amazon.com/images/I/71uZXDtPx5L._SL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="1234567896"
            title="Samsung 189 cm (75 inches) 7 Series 75NU7100 4K LED Smart TV (Black)"
            price={239999}
            image="https://images-na.ssl-images-amazon.com/images/I/91jzADbYVnL._SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
