import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaUserCheck } from "react-icons/fa";


const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
        .then()
        .catch(error => {
            console.log('Logout Error', error);
        })
    }

    const links = <>
    <NavLink 
    className='btn btn-sm md:btn-xs lg:btn-md px-2 border-none bg-none text-base-content text-xs md:text-sm lg:text-[1rem]' 
    to={'/'}>Home</NavLink>
    <NavLink 
    className='btn btn-sm md:btn-xs lg:btn-md px-2 border-none bg-none text-base-content text-xs md:text-sm lg:text-[1rem]' 
    to={'/coupons'}>Coupons</NavLink>
    <NavLink 
    className='btn btn-sm md:btn-xs lg:btn-md px-2 border-none bg-none text-base-content text-xs md:text-sm lg:text-[1rem]' 
    to={'/saved'}>Saved</NavLink>
    <NavLink 
    className='btn btn-sm md:btn-xs lg:btn-md px-2 border-none bg-none text-base-content text-xs md:text-sm lg:text-[1rem]' 
    to={'/dashboard'}>Dashboard</NavLink>
    </>

    return (
        <div>
            <div className="navbar bg-primary shadow-sm rounded-t-xl">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost border-0 pr-0 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-fit px-1 justify-normal shadow rounded-b-xl">
                    {links}
                </ul>
                </div>
                <Link to={'/'} className="btn bg-none border-none pl-2 md:pl-4 h-5 md:h-7">
                    <img className="h-full" src={'https://i.ibb.co/RpXWtHks/logo.png'} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? 
                    <div className="flex items-center gap-2">
                        {
                            user.photoURL ? 
                            <div className="w-7 md:w-8 lg:w-10 h-7 md:h-8 lg:h-10">
                                <img className="w-full h-full object-cover rounded-full" src={user.photoURL}/> 
                            </div>
                            : <FaUserCheck className="text-lg md:text-xl" />
                        }
                        <button 
                        onClick={handleLogOut}
                        className="btn btn-xs md:btn-sm lg:btn-md border-none bg-accent px-2.5 text-xs md:text-base lg:px-4 rounded-sm lg:rounded-lg lg:py-1 mr-1 md:mr-4">Logout</button>
                    </div> :
                    <Link to={'/auth/signup'} 
                    className="btn btn-xs md:btn-sm lg:btn-md border-none bg-accent px-2.5 text-xs md:text-base lg:px-4 rounded-sm lg:rounded-lg lg:py-1 mr-1 md:mr-4">Sign Up</Link>
                }
            </div>
            </div>
    </div>
    );
};

export default Navbar;