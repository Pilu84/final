import React from "react";
import BtPictures from "./bt-pictures";
import Nav from "./nav";
import Carousel from "./carousel";
import MainContent from "./maincontent";


export default class App extends React.Component {
    constructor() {
        super();
    }


    render() {
        return(
            <div>

                <BtPictures />

                <Nav />

                <Carousel />

                <MainContent />

            </div>
        );
    }
}
