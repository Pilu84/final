import React from "react";

export default class Carousel extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="jumbotron mt-5 mh-100">


                <div id="aquarium" className="carousel slide d-flex justify-content-center " data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#aquarium" data-slide-to="0" className="active"></li>
                        <li data-target="#aquarium" data-slide-to="1"></li>
                        <li data-target="#aquarium" data-slide-to="2"></li>
                        <li data-target="#aquarium" data-slide-to="3"></li>
                        <li data-target="#aquarium" data-slide-to="4"></li>
                        <li data-target="#aquarium" data-slide-to="5"></li>
                        <li data-target="#aquarium" data-slide-to="6"></li>
                    </ul>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://s3.amazonaws.com/aquariumdesign/dlJj-spNdlAgXXaNqBQ-T5JtMtDPrAQ7.jpg" alt="" />

                        </div>

                        <div className="carousel-item">
                            <img src="https://s3.amazonaws.com/aquariumdesign/dfAsm0n4pOwVeH3Vz19evScDv36IxAgT.jpg" alt="" />

                        </div>

                        <div className="carousel-item">
                            <img src="https://s3.amazonaws.com/aquariumdesign/P6rfW-8iPbqksJbNpvGL9JqjAccrlxfB.jpg" alt="" />
                        </div>

                        <div className="carousel-item">
                            <img src="https://s3.amazonaws.com/aquariumdesign/Y1Er2HnACNivaLRAn3vsss0KdPOGIXz7.jpeg" alt="" />
                        </div>

                        <div className="carousel-item">
                            <img src="https://s3.amazonaws.com/aquariumdesign/vbPO4duBxapr2kukErRsGNGGrYNJsL2x.jpg" alt="" />
                        </div>

                        <div className="carousel-item">
                            <img src="https://s3.amazonaws.com/aquariumdesign/nMFMgrPC56gWgooz0CuYMeNCCQbRXXUu.jpg" alt="" />
                        </div>

                        <div className="carousel-item">
                            <img src="https://s3.amazonaws.com/aquariumdesign/6jLrr7Xl8X7qlCT3708wM4ZlwITMrdAq.jpg" alt="" />
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
