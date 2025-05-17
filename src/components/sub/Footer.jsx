import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
       <footer className="footer sm:footer-horizontal gap-6 md:gap-12 bg-base-200 text-base-content p-5 md:p-10 text-xs lg:text-sm">
            <aside className='flex items-center gap-2'>
                <Link to={'/'} className='w-24 md:w-32'>
                    <img className='w-full' src="https://i.ibb.co/5gQs9WMy/logofull.png" alt="" />
                </Link>
                <div>
                    <h5 className='text-xl lg:text-2xl'>Dealio</h5> 
                    <p>Providing best coupons right next to your door.</p>
                </div>
            </aside>
            <nav className='gap-0.5 xl:gap-1'>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className='gap-0.5 xl:gap-1'>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className='gap-0.5 xl:gap-1'>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;