import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import mockRestaurantData from "../utils/mockRestaurantData.json";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    //Fetch the data from API
    console.log("API call from useEffect");
    fetchData();
  }, []);

  console.log("Body rendered");

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="searchBox"
            value={searchTxt}
            onChange={(e) => {
              console.log(`onchange triggered with value ${e.target.value}`);
              setSearchTxt(e.target.value);
            }}
          ></input>
          <button
            className="searchBtn"
            onClick={() => {
              setFilteredRestaurantList(
                restaurantList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-res">
          <button
            onClick={() => {
              setFilteredRestaurantList(
                restaurantList.filter((res) => res.info.avgRating > 4.5)
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
