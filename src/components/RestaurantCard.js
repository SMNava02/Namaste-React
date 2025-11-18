const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisine, rating, deliveryTime, image } = resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-img" src={image} />
      <h2>{name}</h2>
      <h3>{cuisine}</h3>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
