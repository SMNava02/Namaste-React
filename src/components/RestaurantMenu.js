import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { mockData } from "../utils/mockResData";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState(null);
  const param = useParams();
  console.log(param);

  useEffect(() => {
    console.log("API call to fetch restaurant menu");
    fetchMenu();
  }, []);

  const fetchMenu = () => {
    // const data = await fetch(
    //   "https://corsproxy.io/?url=https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10576&catalog_qa=undefined&submitAction=ENTER"
    // );
    // const json = await data.json();

    console.log(mockData);

    console.log(
      mockData?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]
        ?.card?.card?.itemCards
    );
    setResMenu(
      mockData?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]
        ?.card?.card?.itemCards
    );

    setResInfo(mockData?.data?.cards[0].card.card.info);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {resMenu.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
