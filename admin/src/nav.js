import React from "react";
import { Link } from "react-router-dom";


export default class Nav extends React.Component{
    constructor() {
        super();
    }

    render() {
        return (
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow-lg">
                <Link to = "/"><div className="navbar-brand col-sm-3 col-md-2 mr-0">Aquarium Design - Admin</div></Link>

                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="/logout">Sign out</a>
                    </li>
                </ul>
            </nav>

        );
    }
}
