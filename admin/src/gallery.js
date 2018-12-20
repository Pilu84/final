import React from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
import SingleGallery from "./singlegallery";


export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showNewGallery: false, showGallery: false};
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        this.setState({showGallery: true, galleryId: e.currentTarget.id});
    }


    componentDidMount() {
        axios.get("/getgallery").then(resp => {
            if(resp.data.length == 0) {
                this.setState({element: "There is no gallery"});
            } else {

                this.setState({element: resp.data});
            }
        });
    }

    render() {
        
        return(
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div className="pages">
                    <h1>Gallery</h1>

                    <div className="container">
                        <Link to = "/newgallery"><button type="button" className = "btn btn-primary mt-5 mb-5">Add new gallery</button></Link>
                        {!this.state.showNewGallery && !this.state.showGallery &&<table className="table table-hover">
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
                                        <tr key={index} onClick = {this.handleClick} id={el.component_id}>
                                            <td>{el.component_id}</td>
                                            <td>{el.content}</td>
                                            <td>{el.status}</td>
                                            <td>{el.author}</td>
                                            <td>{el.created_at}</td>
                                        </tr>
                                    );
                                }) }
                            </tbody>
                        </table> }
                        {this.state.showGallery && <SingleGallery galleryid={this.state.galleryId}/>}
                    </div>
                </div>
            </main>
        );
    }
}
