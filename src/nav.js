import React from "react";
import { Link } from "react-router-dom";
import axios from "./axios";

export default class Nav extends React.Component{
    constructor() {
        super();
        this.state = {navname: ""};
    }

    componentDidMount() {
        axios.get("/getnaviname").then(resp => {
            this.setState({navname: resp.data});
        });
    }

    render() {


        const { navname } = this.state;

        if(!navname) {
            return null;
        }


        return(
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top own-shadow">
                <Link to= "/"><p className="navbar-brand">
                    <img src="logo.jpg" width="60" height="60" className="d-inline-block align-center" alt="" />Aquarium Design
                </p></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="row collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav justify-content-end">

                        {navname && navname.map((elem, index) => {
                            if (elem == "home") {
                                return (

                                    <li className="nav-item" key={index}>
                                        <Link to = "/" className="nav-link">Home</Link>
                                    </li>
                                );
                            } else {
                                return (
                                    <li className="nav-item" key={index}>
                                        <Link to = {elem} className="nav-link" >{elem}</Link>
                                    </li>
                                );
                            }
                        })}


                    </ul>

                </div>
            </nav>
        );
    }


}
