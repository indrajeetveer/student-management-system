import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-xl font-semibold bg-[#359FA0] py-3 px-30">
      <div>
        <h1>StudentMS</h1>
      </div>

      <div className="flex gap-10 ">
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/addstudent">+Add</Link>
      </div>
    </div>
  );
};

export default Navbar;
