import { IMG_BASE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData.info;
  return (
    <div className="m-4 p-4 w-50 h-80 bg-gray-300 rounded-2xl">
      <img
        className="w-45 h-20 rounded-2xl"
        src={IMG_BASE_URL + cloudinaryImageId}
      />
      <h2 className="font-bold py-1">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
      <h4>{`${sla.deliveryTime} Mins+`}</h4>
    </div>
  );
};

export default RestaurantCard;
