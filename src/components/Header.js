import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
//import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("useEffect called in header");
  }, [btnName]);

  console.log("Header rendered");

  const { loggedInUser } = useContext(UserContext);

  //const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex p-4 m-4 justify-between items-center border-2 border-amber-400 shadow-2xs shadow-emerald-400">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex-1">
        <ul className="flex justify-end hover:">
          <li className="p-4 m-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 m-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4 m-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4 m-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4 m-4">Cart - {cartItems.length} Items</li>
          <li className="p-4 m-4">
            <button
              className="w-20 text-center bg-gray-300 rounded-2xl"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="p-4 m-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
