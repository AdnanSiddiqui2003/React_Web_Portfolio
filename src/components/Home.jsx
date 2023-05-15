import React from "react";
import img1 from "./Images/img1.png";
import part from "./Images/me.png";
import "./site.css"

const Home=()=>
{
    return(
    
  <>
  <section>

<div className="container-fluid">
       <div className="row">
        {/* <!-- start of logo section  --> */}
        <div className="col-md-4 " id="container">
             <img src={img1} id="logo" alt="image" />
        </div>
        {/* <!-- end of logo section  --> */}
    
         <div className="col-md-8" id="nav_sec">
         
              <div id="nbody">
                <h1 className="nhead"> Hi </h1>
                <h1 className="nhead"> I'm Adnan </h1>
                <h3 id="npara"> Explore my work  </h3>
              </div>
              <div id="nimg">
                <img src={part} alt="images" width="400" height="500" id="nsec"  className="d-none d-sm-block"/>
              </div>

         </div>

        </div>
       </div>

       {/* End of container  */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 mt-5">
              <div className="d-md-flex justify-content-between footer">
                <div className="sicon"><a href="https://twitter.com/AdnanSi35804052" target="_blank"><i className="fa fa-twitter social fa-2x" ></i></a></div>
                <div className="sicon"><a href="https://www.linkedin.com/in/adnan-siddiqui-841a38206" target="_blank"><i class="fa fa-linkedin social fa-2x" ></i></a></div>
                <div className="sicon"><a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram social fa-2x"></i></a></div>
                <div className="sicon"><a href="https://github.com/AdnanSiddiqui2003" target="_blank" ><i className="fa fa-github social fa-2x"></i></a></div>
                <div className="sicon"><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook social fa-2x"></i></a></div>
                </div>
              </div> 
          </div>
        </div>
    </section>

        </>
    )
}
export  default Home;