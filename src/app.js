import React from "react";
import BtPictures from "./bt-pictures";
import Nav from "./nav";
import MainContent from "./maincontent";
import { BrowserRouter, Route } from "react-router-dom";

export default class App extends React.Component {
    constructor() {
        super();
    }


    render() {
        return(
            <BrowserRouter>
                <div>

                    <BtPictures />

                    <Nav />

                    <Route exact path = "/" render = { props => {
                        return <MainContent {...props}
                            key = {1}/>;
                    }} />

                    <Route exact path = "/:id" render = { props => {
                        return <MainContent {...props}
                            key = {props.match.url }/>;
                    }} />


                </div>
            </BrowserRouter>
        );
    }
}
