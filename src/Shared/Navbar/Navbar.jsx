import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg';
import useAuth from "../../Hooks/useAuth";
// import { AuthContext } from "../../Providers/AuthProvider";
// import { useContext } from "react";

const Navbar = () => {

  // const {user, logOut} = useContext(AuthContext);
  const {user, logOut} = useAuth();

  const handleLogout = () => {
    logOut()
    .then()
    .catch(error => console.log(error))
  }



  const navlinks = <>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/about'>About</Link></li>
  {user?.email ?  <>
    <li><Link to='/bookings'>My Booking</Link></li>
    <li><button onClick={handleLogout}>Logout</button></li> 
  </>
  : 
  <li><Link to='/login'>Login</Link></li>
 }
  <li><Link to='/signup'>Signup</Link></li>
  
  </>



  return (
    <div className="navbar bg-base-100 h-28 mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
      <img src={logo} />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end">

  {/* <button className="btn btn-outline btn-warning ">Appoinment</button> */}

  <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Appoinment</button>




  </div>
</div>
  );
};

export default Navbar;
