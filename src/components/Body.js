import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard, { rcWithLabels } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    //Fetch the data from API
    console.log("Useeffect called in body");
    fetchData();

    return () => {
      // Used to clean up Timers
      console.log("Clean up before body component Unmounts");
    };
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

  const onlineStatus = useOnlineStatus();

  const RestaurantCardWithPromoLabel = rcWithLabels(RestaurantCard);

  if (!onlineStatus)
    return <h1>Looks like your internet connection is down! pls check!</h1>;

  //Conditional Rendering
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-normal text-center">
        <div className="p-4 m-4">
          <input
            className="border-2 border-gray-400"
            value={searchTxt}
            onChange={(e) => {
              console.log(`onchange triggered with value ${e.target.value}`);
              setSearchTxt(e.target.value);
            }}
          ></input>
          <button
            className="w-20 m-2 bg-gray-300 rounded-2xl hover:bg-gray-600"
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
        <div className="p-4 m-4">
          <button
            className="w-46 m-2 bg-gray-300 rounded-2xl hover:bg-gray-600"
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
      <div className="flex flex-wrap p-4 m-4">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardWithPromoLabel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
