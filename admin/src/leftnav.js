import React from "react";
import { Link } from "react-router-dom";

export default class LeftNav extends React.Component{
    constructor() {
        super();
    }

    render() {
        return(
            <nav className="col-md-2 d-none d-md-block bg-light sidebar shadow">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to = "/">
                                <span data-feather="home"></span>
                                <p className = "nav-link">Dashboard</p>
                            </Link>
                        </li>
                        <Link to = "/pages">
                            <li className="nav-item">
                                <p className="nav-link">
                                        Pages
                                </p>
                            </li>
                        </Link>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="shopping-cart"></span>
              Products
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="users"></span>
              Customers
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="bar-chart-2"></span>
              Reports
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="layers"></span>
              Integrations
                            </a>
                        </li>
                    </ul>

                </div>
            </nav>
        );
    }
}
