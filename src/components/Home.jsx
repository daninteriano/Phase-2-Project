import React from 'react';

export default function Home() {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="Background" height="500px"/>
                <div className="card-img-overlay d-flex flex-column ">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
                    <p className="card-text lead fs-2"> 
                        Check out all the trends, if you want to be cool
                    </p>
                    </div>
                </div> 
            </div>

        </div>

    );
}
