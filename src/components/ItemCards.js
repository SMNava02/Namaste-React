const ItemCards = ({ items }) => {
  return items.map((item) => {
    const { name, description, id } = item?.card?.info;
    return (
      <div
        key={id}
        className="w-6/12 m-auto border-b-2 border-b-gray-300 text-left"
      >
        <span className="py-4">{name}</span>
        <p className="py-4 text-sm">{description}</p>
      </div>
    );
  });
};

export default ItemCards;
