import React from "react";
import axios from "./axios";

export default class Uploader extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {unShow:  props.unShowUploader, addPicture: props.addNewPicture, addToContent: props.addToContent};


    }




    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.files[0]
        });

    }

    handleSubmit(e) {
        e.preventDefault();



        var formData = new FormData();
        formData.append("file", this.state.file);


        axios.post("/upload", formData).then(({data}) => {
            console.log("a content: ", data.picture.url);
            // if(this.state.addToContent) {
            this.state.addToContent(data.picture.url);
            // }
            //
            // this.state.unShow();
            // this.state.addPicture(data.picture);

        });

    }

    render() {

        return (
            <div className="row">
                <div className="bg-light w-50 shadow p-5">
                    <div onClick={this.state.unShow} className="escape"><p className="close" aria-label="close">&times;</p></div>
                    <h1>Upload an image</h1>
                    <form onSubmit = {this.handleSubmit} className="form-inline">
                        <input onChange = { this.handleChange } name="file" type = "file" accept = "image/*" />
                        <button>Upload</button>
                    </form>
                </div>
            </div>
        );
    }
}
