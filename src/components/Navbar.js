import React from 'react'

const navbar = () => {
    return (
        <>  
        <div className="scroll-up-btn">
            <i className="fas fa-angle-up"></i>
         </div>      
        <nav>
        <input id="nav-toggle" type="checkbox" />
        <div className="logo">Pushan<span className="name">Verma</span></div>
        <ul className="links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#intrests">Intrests</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#details">Contact</a></li>
        </ul>
        <label for="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
      
        </>
    );
}

export default navbar;
