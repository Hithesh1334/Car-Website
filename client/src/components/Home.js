import React from 'react';
// import Imageslider from './Imageslider';

import TypecarHomepage from './TypeCarsHomePage';
import Brand from'./Brand.js';



const Home = () => {
    
    return (
        <>
        <div className= " homepage">
            <div className="home-body">
            <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="animate-charcter"> WELCOME TO THE VIRTUAL SHOWROOM!</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="animate-charcter2"> WELCOME TO THE VIRTUAL SHOWROOM!</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div> 
        {/* <Imageslider>
        </Imageslider>  */}
        <TypecarHomepage/>
        <div className="seperator">
            Brand
        </div>
        <Brand/>
        <nav class="navbar bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT54zgUW6YhXkIX6OrAHRLefBfxJKNJ8n8WvQ&usqp=CAU" alt="Bootstrap" width="30" height="24"/>
            </a>
        </div>
</nav>
        </>
    );
}

export default Home;
