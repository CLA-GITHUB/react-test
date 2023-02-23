import React from "react";
import { AuthContext } from "../authContext";
import { useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";

const Header = () => {
  const { dispatch } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/admin/login");
  };
  return (
    <div className='flex justify-between items-center'>
      <p className='uppercase text-3xl font-extrabold'>app</p>
      <button
        onClick={handleLogOut}
        className='rounded-full px-5 py-2 bg-[#9BFF00] text-[#000000]'
      >
        <div className='flex gap-1 items-center'>
          <BiUser />
          Logout
        </div>
      </button>
    </div>
  );
};

export default Header;
