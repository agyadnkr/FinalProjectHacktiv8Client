import React from "react";
import Dropdown from "../organisms/Dropdown";
import { useNavigate } from "react-router-dom";
import DropdownProfile from "../organisms/DropdownProfile";

export default function Navbar({ setLoginBuyer, setLoginDealer }) {
  const navigate = useNavigate();
  return (
    <div className="w-full h-16 px-36 flex flex-row justify-between text-slate-900">
      <div className="w-1/4 h-full font-bold font-open-sans text-xl text-xl flex justify-start items-center">
        LOGO
      </div>
      <div className="w-1/2 h-full flex flex-row gap-x-8 justify-center items-center text-xl">
        <button
          className="h-full font-bold font-open-sans text-xl hover:border-b hover:border-blue-700 ease-linear transition-all duration-150"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="h-full font-bold font-open-sans text-xl hover:border-b hover:border-blue-700 ease-linear transition-all duration-150"
          onClick={() => navigate("/cars")}
        >
          Browse Car
        </button>
        <button
          className="h-full font-bold hover:border-b hover:border-blue-700 ease-linear transition-all duration-150"
          onClick={() => navigate("/dealer/dashboard/sell")}
        >
          Sell a Car
        </button>
      </div>
      <div className="h-full w-1/4 flex flex-row gap-x-8 justify-end items-center text-xl">
        {!localStorage.getItem("access_token") ? (
          <>
            {" "}
            <Dropdown
              title="Login"
              setLoginBuyer={setLoginBuyer}
              setLoginDealer={setLoginDealer}
            />
            <Dropdown title="Register" />{" "}
          </>
        ) : (
          <DropdownProfile />
        )}
      </div>
    </div>
  );
}
