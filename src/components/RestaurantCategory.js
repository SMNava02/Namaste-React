import ItemCards from "./ItemCards";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [showItemCards, setShowItemCards] = useState(false);
  const handleAccordionClick = () => {
    setShowItemCards(!showItemCards);
  };
  return (
    <div>
      <div
        id="header"
        className="w-6/12 mx-auto my-3 bg-gray-200 flex justify-between cursor-pointer"
        onClick={handleAccordionClick}
      >
        <span className="font-bold">
          {data?.title} ({data?.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      <div>{showItemCards && <ItemCards items={data?.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
