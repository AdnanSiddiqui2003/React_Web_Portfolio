import React from "react";
import './skill.css'
import html from './Images/tech/html5.png'
import css from './Images/tech/css-3.png'
import bts from './Images/tech/bootstrap.png'
import js from './Images/tech/java-script.png'
import python from './Images/tech/python.png'
import django from './Images/tech/django.png'
import rect from './Images/tech/react.png'
import excel from './Images/tech/excel.png'

const Skills=()=>
{
    return(
        <>
         <div class="container mt-5">
        <h1 class="head">Skills </h1>
        <div class="row">
            <div class="col-md-3">
                {/* <!-- start of card  --> */}
                <div class="card">
                       <div class="card-body">
                             <img src={html} alt="icon" class="img-thumbnail" />
                       </div>   
                       <div class="card-footer">
                        <h4 class="lead">HTML 5</h4>
                       </div>
                </div>
                {/* <!-- end of card  --> */}
            </div>
{/* <!-- card 2  --> */}
            <div class="col-md-3">
                {/* <!-- start of card  --> */}
                <div class="card">
                       <div class="card-body">
                             <img src={css} alt="icon" class="img-thumbnail" />
                       </div>   
                       <div class="card-footer">
                        <h4 class="lead">CSS 3</h4>
                       </div>
                </div>
                {/* <!-- end of card  --> */}
            </div>

{/* <!-- end of card 2  --> */}

{/* <!-- card 3  --> */}
<div class="col-md-3">
    {/* <!-- start of card  --> */}
    <div class="card">
           <div class="card-body">
                 <img src={bts} alt="icon" class="img-thumbnail" />
           </div>   
           <div class="card-footer">
            <h4 class="lead">BOOTSTRAP</h4>
           </div>
    </div>
    {/* <!-- end of card  --> */}
</div>

{/* <!-- end of card 3  --> */}

{/* <!-- card 4  --> */}
<div class="col-md-3">
    {/* <!-- start of card  --> */}
    <div class="card">
           <div class="card-body">
                 <img src={js} alt="icon" class="img-thumbnail" />
           </div>   
           <div class="card-footer">
            <h4 class="lead">JAVASCRIPT</h4>
           </div>
    </div>
    {/* <!-- end of card  --> */}
</div>

{/* <!-- end of card 4  --> */}

   </div>
   {/* <!-- End of row  --> */}
</div>
{/* <!-- End of column  --> */}
<br/>
<br/>
<br/>
<div class="container mt-5">
    <div class="row">
    {/* <!-- card 5  --> */}
<div class="col-md-3">
    {/* <!-- start of card  --> */}
    <div class="card">
           <div class="card-body">
                 <img src={python} alt="icon" class="img-thumbnail" />
           </div>   
           <div class="card-footer">
            <h4 class="lead">PYTHON</h4>
           </div>
    </div>
    {/* <!-- end of card  --> */}
</div>

{/* <!-- end of card 5  --> */}

{/* <!-- card 6  --> */}
<div class="col-md-3">
    {/* <!-- start of card  --> */}
    <div class="card">
           <div class="card-body">
                 <img src={django} alt="icon" class="img-thumbnail" />
           </div>   
           <div class="card-footer">
            <h4 class="lead">Django</h4>
           </div>
    </div>
    {/* <!-- end of card  --> */}
</div>

{/* <!-- end of card 6  --> */}

{/* <!-- card 7  --> */}
<div class="col-md-3">
    {/* <!-- start of card  --> */}
    <div class="card">
           <div class="card-body">
                 <img src={rect} alt="icon" class="img-thumbnail" />
           </div>   
           <div class="card-footer">
            <h4 class="lead">React js </h4>
           </div>
    </div>
    {/* <!-- end of card  --> */}
</div>

{/* <!-- end of card 7  --> */}

{/* <!-- card 8  --> */}
<div class="col-md-3">
    {/* <!-- start of card  --> */}
    <div class="card">
           <div class="card-body">
                 <img src={excel} alt="icon" class="img-thumbnail" />
           </div>   
           <div class="card-footer">
            <h4 class="lead">Excel</h4>
           </div>
    </div>
    {/* <!-- end of card  --> */}
</div>

{/* <!-- end of card 8  --> */}

{/* <!-- End of row  --> */}
        </div>
        {/* <!-- End of col  --> */}
    </div>
        </>
    )
}
export default Skills;