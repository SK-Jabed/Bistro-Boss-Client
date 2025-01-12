import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [ cart ] = useCart();
  const [isAdmin] = useAdmin();

  const navOptions = (
    <>
      <li>
        <NavLink to={"/"}>HOME</NavLink>
      </li>
      <li>
        <a>CONTACT US</a>
      </li>
      {user && isAdmin && (
        <li>
          <NavLink to={"/dashboard/adminHome"}>DASHBOARD</NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink to={"/dashboard/userHome"}>DASHBOARD</NavLink>
        </li>
      )}
      <li>
        <NavLink to={"/menu"}>OUR MENU</NavLink>
      </li>
      <li>
        <NavLink to={"/order/desserts"}>ORDER NOW</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>
          <button className="btn">
            <FaShoppingCart className="mr-2"></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </NavLink>
      </li>

      {user ? (
        <>
          <button onClick={logOut} className="btn btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <NavLink to={"/auth/login"}>Login</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="flex flex-col">
            <a className="text-2xl font-semibold uppercase">Bistro Boss</a>
            <span className="text-2xl font-semibold uppercase">Restaurant</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
