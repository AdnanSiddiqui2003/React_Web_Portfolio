import React from "react";
import  "./site.css";
import logo from "./Images/Logo/logo.png"
import {Link} from "react-router-dom"

const Navbar=()=>
{
    return(
    <>
          {/* start of navbar code  */}
           {/* <!-- start of nav code  --> */}
 <section>
 <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 mt-2">
                <img src={logo} alt="this is logo" id="clogo"/>
                </div>
                <div className="col-md-8">
                <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link to="/" className="li">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/about" className="li">About</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/Skills" className="li">Skills</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
             {/* <!-- End of nav code  --> */}
          {/* end of navbar code  */}
                </div>
            </div>
                    
           </div>
 </section>
        
           
    </>
    );
     
}
export default Navbar;