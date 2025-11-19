import { IMG_BASE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-img" src={IMG_BASE_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
      <h4>{`${sla.deliveryTime} Mins+`}</h4>
    </div>
  );
};

export default RestaurantCard;
