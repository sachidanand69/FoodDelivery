import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
         <div className="footer-content-left">
           <img src={assets.logo} alt="" />
           <p>An online ordering site involves a lot of moving pieces, not least of which is the “footer” section that appears at the bottom of all pages. When used properly, the footer of your site can be a great tool for improving your sales and customer experience.</p>
           <div className="footer-social-icons">
             <img src={assets.facebook_icon} alt="" />
             <img src={assets.twitter_icon} alt="" />
             <img src={assets.linkedin_icon} alt="" />
           </div>
         </div>
         <div className="footer-content-center">
             <h2>COMPANY</h2>
             <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Delivery</li>
               <li>Privacy Policy</li>
             </ul>
         </div>
         <div className="footer-content-right">
             <h2>GET IN TOUCH</h2>
             <ul>
               <li>+1-234-456-9876</li>
               <li>contact@tomato.com</li>
             </ul>
         </div>
       </div>
       <hr />
       <p className="footer-copyright"> Copyright 2024 Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
