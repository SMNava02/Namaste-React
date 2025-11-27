import ItemCards from "./ItemCards";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleAccordionClick = () => {
    setShowIndex();
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
      <div>{showItems && <ItemCards items={data?.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
