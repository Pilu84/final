import React from "react";

export default class Carousel extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="jumbotron mt-5 mh-100">


                <div id="aquarium" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#aquarium" data-slide-to="0" className="active"></li>
                        <li data-target="#aquarium" data-slide-to="1"></li>
                        <li data-target="#aquarium" data-slide-to="2"></li>
                    </ul>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="wallpaper-M2010s.PNG" alt="" />
                            <div className="carousel-caption">
                                <h3>Los Angeles</h3>
                                <p>We had such a great time in LA!</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="MA_11944_PlantedOasis_SlateWall.jpg" alt="" />
                            <div className="carousel-caption">
                                <h3>Chicago</h3>
                                <p>Thank you, Chicago!</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="wallpaper-M2010s.PNG" alt="New York" />
                            <div className="carousel-caption">
                                <h3>New York</h3>
                                <p>We love the Big Apple!</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#aquarium" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#aquarium" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>

            </div>
        );
    }
}
