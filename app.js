import React from "react";
import ReactDOM from "react-dom/client";
import restaurantList from "./restaurantData.json";

//JSX -> transpiled using Babel to React element -> React JS Object -> HTML on render

/**
 * Header
 *  - Logo
 *  - Nav items
 *    - Home
 *    - About
 *    - Cart
 * Body
 *  - Search
 *  - Restaurant Container
 *     - Restaurant cards
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjvtwgaH8sTG9PMsDyb2GBUfw4Ji3vD5kRg&s"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
    <div></div>
  </div>
);

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisine, rating, deliveryTime, image } = resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-img" src={image} />
      <h2>{name}</h2>
      <h3>{cuisine}</h3>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {restaurantList.map((restaurant) => (
        <RestaurantCard key={restaurant.storeUuid} resData={restaurant} />
      ))}
    </div>
  </div>
);

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
