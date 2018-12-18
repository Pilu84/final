import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./nav";
import LeftNav from "./leftnav";
import Mainrole from "./mainrole";
import Pages from "./pages";
import AddNewPage from "./newpage";


export default class App extends React.Component {
    constructor() {
        super();
    }


    render() {
        return(
            <BrowserRouter>
                <div className="appbegin">

                    <Nav />


                    <div className="container-fluid">
                        <div className="row mt-5">

                            <LeftNav />
                            <Route exact path = "/" render = {() => {

                                return <Mainrole />;
                            }} />

                            <Route exact path = "/pages" render = { () => {
                                return <Pages />;
                            }} />

                            <Route exact path = "/newpage" render = { () =>{
                                return <AddNewPage />;
                            }} />


                        </div>




                    </div>
                </div>
            </BrowserRouter>

        );
    }
}
