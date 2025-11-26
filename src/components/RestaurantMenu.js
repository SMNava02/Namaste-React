import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  let { resInfo, resMenu } = useRestaurantMenu(resId);

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
      {categories.map((category) => (
        <div key={category?.card?.card?.title}>
          <RestaurantCategory data={category?.card?.card} />
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
