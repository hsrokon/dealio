import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
       <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
            <aside className='flex items-center gap-2'>
                <Link to={'/'} className='w-32'>
                    <img className='w-full' src="https://i.ibb.co/5gQs9WMy/logofull.png" alt="" />
                </Link>
                <div>
                    <h5 className='text-2xl'>Dealio</h5> 
                    <p>Providing best coupons right next to your door.</p>
                </div>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;