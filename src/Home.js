import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Audio/PD22-CEPC/deslShov/q/Audio_Tallhero_3000x1200._CB631563403_.jpg"
          alt=""
        ></img>
        <div className="home__row">
          <Product
            title="The C++"
            price={29.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWt6F39OQ8m5avjHZWSc2K27xVKsnhUdrF6YX8UhUO&s"
            rating={5}
          />
          <Product
            title="JAVA Programming"
            price={16.99}
            image="https://m.media-amazon.com/images/I/514axA2lwpL.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title=" i Phone 12"
            price={99.9}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000"
            rating={4}
          />
          <Product
            title="JBL GO"
            price={20.0}
            image="https://cdn1.smartprix.com/rx-iytEKA7ID-w1200-h1200/jbl-go-plus-portable.webp"
            rating={4}
          />
          <Product
            title="HP Laptop"
            price={99.0}
            image="https://5.imimg.com/data5/NW/KV/MY-32712236/hp-laptop-500x500.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Whirlpool washing machine"
            price={50.0}
            image="https://4.imimg.com/data4/MD/TD/MY-13223178/whirlpool-washing-machine-500x500.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
