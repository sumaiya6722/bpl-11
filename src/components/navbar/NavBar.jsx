import React from 'react';
import dollarImg from "../../assets/dollar 1.png";

const NavBar = ({coin}) => {
  return (
    <div className='container mx-auto'>
      <div className="navbar bg-base-100 ">

        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>

        <div className="flex-none">
          <button className=" btn flex justify-between items-center gap-2 font-bold text-xl">
            {coin} Coins
            <img src={dollarImg} alt="" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default NavBar;