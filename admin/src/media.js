import React from "react";
import axios from "./axios";
import Uploader from "./uploader";

export default class Media extends React.Component{
    constructor() {
        super();
        this.state = {showUploader: false};
        this.handleClick = this.handleClick.bind(this);
        this.unShowUploader = this.unShowUploader.bind(this);
        this.addNewPicture = this.addNewPicture.bind(this);
    }

    addNewPicture(data) {
        this.setState({
            picture: [...this.state.picture, data]
        });
    }

    unShowUploader() {

        this.setState({
            showUploader: false
        });
    }

    handleClick() {
        this.setState({showUploader: true});
    }

    componentDidMount() {
        axios.get("/getmedia").then(resp=>{
            this.setState({picture: resp.data});
        });
    }



    render() {
        console.log("a this state: ", this.state.picture);
        const { picture } = this.state;
        return(
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div className="pages">
                    <h1>Media</h1>
                    <button className = "btn btn-primary mt-5 mb-5" onClick={this.handleClick}>Upload picture</button>
                    <div className="container">
                        <div className="row">
                            {picture && picture.map((pictures, index) => {
                                return (

                                    <div className="col-md-4" key={index}>
                                        <div className="thumbnail">
                                            <img src={pictures.url} className="img-thumbnail"/>
                                        </div>
                                    </div>

                                );
                            })}
                        </div>

                        {this.state.showUploader && <Uploader unShowUploader = {this.unShowUploader}
                            addNewPicture = {this.addNewPicture} />}




                    </div>
                </div>
            </main>
        );
    }
}
