import React from "react";
import axios from "./axios";
import Uploader from "./uploader";
import Adder from "./adder";

export default class SingleGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: "", uploaderIsVisible: false, saved: false, adderVisible: false, timer: false};

        this.showUploader = this.showUploader.bind(this);
        this.unShowUploader = this.unShowUploader.bind(this);
        this.addNewPicture = this.addNewPicture.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showAdder = this.showAdder.bind(this);
        this.unShowAdder = this.unShowAdder.bind(this);

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();


        let sendData = {pictures: JSON.stringify(this.state.ids), galleryid: this.props.galleryid};

        axios.post("/updateGallery", sendData).then(resp => {


            if(resp.data.succes) {
                this.setState({saved: true, timer: true});
                if(this.state.timer) {
                    setTimeout(function(){ this.setState({saved: false, timer: false}); }.bind(this), 3000);
                }
            }
        });
    }

    showAdder() {
        this.setState({adderVisible: true});
    }

    unShowAdder() {
        this.setState({adderVisible: false});
    }

    addNewPicture(data) {
        console.log("a data: ", data);

        this.setState({
            picture: [...this.state.picture, data],
            ids: [...this.state.ids, data.media_id]
        });
    }

    showUploader() {

        this.setState({
            uploaderIsVisible: true
        });
    }

    unShowUploader() {

        this.setState({
            uploaderIsVisible: false
        });
    }


    componentDidMount() {
        axios.get("/getsinglegallery" , {params: {gallery: this.props.galleryid}}).then(resp => {

            this.setState({picture: resp.data});
            var idArr = [];
            for (var i = 0; i < resp.data.length; i++) {
                idArr.push(resp.data[i].media_id);
            }

            this.setState({ids: idArr});
        });
    }


    render() {


        if (!this.state.picture) {
            return null;
        }


        const { picture } = this.state;
        console.log(this.state);
        return(

            <div>
                <h1>Single Gallery</h1>
                <div className="container mb-5">
                    <button onClick = {this.showUploader} className = "btn btn-primary m-5">Upload picture</button>
                    <button onClick = {this.showAdder} className = "btn btn-primary m-5">Add picture from media</button>

                    {this.state.uploaderIsVisible && <Uploader unShowUploader={this.unShowUploader} addNewPicture = {this.addNewPicture}/>}
                    {this.state.adderVisible && <Adder unShowUploader={this.unShowAdder} addNewPicture = {this.addNewPicture}/>}
                    <form onSubmit={this.handleSubmit}>

                        <button className = "btn btn-primary mt-5 mb-5">Save</button>
                    </form>

                    {this.state.saved && <div className="alert alert-success">
                        <strong>Success!</strong>

                    </div>}

                    <div className="row border p-5 shadow">

                        {picture && picture.map((el, index) => {
                            return (
                                <div className="col-md-4" key={index}>
                                    <div className="thumbnail">
                                        <img src={el.url} className="img-thumbnail"/>
                                    </div>

                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        );
    }
}
