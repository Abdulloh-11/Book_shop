import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
 
 
  return (
    <div className=" fixed w-[250px] h-[100vh] bg-slate-600 py-[20px] flex flex-col">
      
      <div className="h-[200px] w-[100%] flex justify-center">
        
      </div>
      <ul className=" justify-center mx-8 h-[60%] flex flex-col w-[250px] items-start ps-0">
        <Link className="text-white text-3xl my-10 "  to="/books">Book List</Link>
        <Link className="text-white text-3xl "  to="/categories">Categories</Link>
        <Link className="text-white text-3xl my-10 "  to="/autors">Authors</Link>
        
      </ul>
    </div>
  );
};

export default Navbar;
