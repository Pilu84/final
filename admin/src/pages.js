import React from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
import SinglePage from "./singlepage";

export default class Pages extends React.Component {
    constructor() {
        super();

        this.state = {element: "", showNewpage: false, showPage: false, pageId: ""};
        this.handleClick = this.handleClick.bind(this);
        this.unShowSinglePage = this.unShowSinglePage.bind(this);

    }

    handleClick(e) {
        this.setState({showPage: true, pageId: e.currentTarget.id});
    }

    unShowSinglePage() {
        this.setState({showPage: false});
    }

    componentDidMount() {
        axios.get("/getallpages").then(resp => {
            this.setState({element: resp.data});
        });
    }

    render() {



        return(
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div className="pages">
                    <h1>Pages</h1>
                    <div className="container">
                        <Link to = "/newpage"><button type="button" className = "btn btn-primary mt-5 mb-5">Add new page</button></Link>
                        {!this.state.showNewpage && !this.state.showPage &&<table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Status</th>
                                    <th>Author</th>
                                    <th>Created at</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.element && this.state.element.map((el, index) => {
                                    return (
                                        <tr key={index} onClick = {this.handleClick} id={el.id}>
                                            <td>{el.id}</td>
                                            <td>{el.title}</td>
                                            <td>{el.status}</td>
                                            <td>{el.author}</td>
                                            <td>{el.created_at}</td>
                                        </tr>
                                    );
                                }) }
                            </tbody>
                        </table> }

                        {this.state.showPage && <SinglePage pageid={this.state.pageId} unShowSinglePage={this.unShowSinglePage} unShowUploader = {this.unShowUploader}/>}
                    </div>

                </div>
            </main>
        );
    }
}
