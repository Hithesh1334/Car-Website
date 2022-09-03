import React from 'react';
import Imageslider from './Imageslider'

const Home = () => {
    return (
        <>
        <div className= " homepage">
            <div className="home-body">
            <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h3 class="animate-charcter"> WELCOME TO THE VIRTUAL SHOWROOM!</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h3 class="animate-charcter2"> WELCOME TO THE VIRTUAL SHOWROOM!</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div> 
        <Imageslider/>   
        </>
    );
}

export default Home;
