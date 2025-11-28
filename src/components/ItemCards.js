import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const ItemCards = ({ items }) => {
  const dispatch = useDispatch();

  return items.map((item) => {
    const { name, description, id } = item?.card?.info;
    return (
      <div
        key={id}
        className="w-6/12 m-auto border-b-2 border-b-gray-300 text-left"
      >
        <div className="flex justify-between">
          <span>{name}</span>
          <button
            className="w-10 border-2 border-black cursor-pointer rounded text-white bg-black"
            onClick={() => {
              //dispatch addItem action for cart
              dispatch(addItem(name));
            }}
          >
            Add
          </button>
        </div>
        <p className="py-4 text-sm">{description}</p>
      </div>
    );
  });
};

export default ItemCards;
