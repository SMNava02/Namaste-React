import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockRestaurantData.json";

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

export default Body;
