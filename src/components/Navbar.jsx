import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <>
    <NavLink 
    className='btn px-2 border-none bg-none text-base-content text-[1rem]' 
    to={'/'}>Home</NavLink>
    <NavLink 
    className='btn px-2 border-none bg-none text-base-content text-[1rem]' 
    to={'/coupons'}>Coupons</NavLink>
    <NavLink 
    className='btn px-2 border-none bg-none text-base-content text-[1rem]' 
    to={'/saved'}>Saved</NavLink>
    <NavLink 
    className='btn px-2 border-none bg-none text-base-content text-[1rem]' 
    to={'/dashboard'}>Dashboard</NavLink>
    </>

    return (
        <div>
            <div className="navbar bg-primary shadow-sm rounded-t-xl">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-fit gap-1 p-2 justify-normal shadow">
                    {links}
                </ul>
                </div>
                <Link to={'/'} className="btn bg-none border-none h-7">
                    <img className="h-full" src={'https://i.ibb.co/RpXWtHks/logo.png'} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/auth/signup'} 
                className="btn border-none bg-accent px-4 rounded-lg py-1 mr-4">Sign Up</Link>
            </div>
            </div>
    </div>
    );
};

export default Navbar;