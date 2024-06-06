import React from 'react';

export default function Nav(props) {
    return(
        <header className="header row" id="top">
         <div className="col logo-col">
            <img src="assets/images/logo.png" alt="" />
         </div>
         <button className="btn-white duplicate">Join</button>
         <div className="hamburger" tabindex="0">
            <span className="material-symbols-outlined">menu</span>
            <div className="notification-down">
               <ul>
                  <li><a href="index.html" /*className={props.activePage}*/ >Home</a></li>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="portofolio.html">Portfolio</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li className="button"><a href="index.html">Get the App</a></li>
              </ul>              
            </div>
         </div>
         <div className="col navigation-col">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/portofolio">Portfolio</a>
            <a href="/contact">Contact Us</a>
            <a href="/blog">Blog</a>
         </div>
         <div className="col btn-primary">
            <button className="btn-white">Join</button>
            <button className="btn-black">Get the App</button>
         </div>
      </header>
    )
}