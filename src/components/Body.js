import RestaurantCard from "./RestaurantCard";
import mockRestaurantData from "../utils/mockRestaurantData.json";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(mockRestaurantData);
  return (
    <div className="body">
      <div className="filter-res">
        <button
          onClick={() => {
            setRestaurantList(restaurantList.filter((res) => res.rating > 4));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.storeUuid} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
