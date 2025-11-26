import { useEffect, useState } from "react";
import { mockData } from "../utils/mockResData";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    console.log("API call to fetch restaurant menu for " + resId);
    fetchMenu();
  }, []);

  const fetchMenu = () => {
    // const data = await fetch(
    //   "https://corsproxy.io/?url=https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10576&catalog_qa=undefined&submitAction=ENTER"
    // );
    // const json = await data.json();
    setResMenu(mockData?.data?.cards);

    setResInfo(mockData?.data?.info);
  };

  return { resInfo, resMenu };
};

export default useRestaurantMenu;
