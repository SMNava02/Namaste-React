import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  let { resInfo, resMenu } = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo;

  const categories = resMenu.filter((categoryCard) =>
    categoryCard?.card?.card?.["@type"].includes("itemCategory")
  );

  return (
    <div className="text-center">
      <h1 className="font-bold">{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      {categories.map((category, index) => (
        <div key={category?.card?.card?.title}>
          <RestaurantCategory
            data={category?.card?.card}
            showItems={index === showIndex && true}
            setShowIndex={() => setShowIndex(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
