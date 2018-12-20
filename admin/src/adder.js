import React from "react";
import axios from "./axios";


export default class Adder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {picture: "", unShow: props.unShowUploader, addNewPicture: props.addNewPicture};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {

        let pictures;
        for (var i = 0; i < this.state.picture.length; i++) {
            if ( this.state.picture[i].media_id == e.currentTarget.id) {
                console.log(this.state.picture[i]);
                pictures = this.state.picture[i];
                break;

            }
        }

        this.state.addNewPicture(pictures);
        this.state.unShow();
    }


    componentDidMount() {

        axios.get("/getmedia").then(resp=>{
            this.setState({picture: resp.data});
        });

    }


    render() {

        if(!this.state.picture) {

            return null;
        }


        const { picture } = this.state;


        return(
            <div className="row border p-5 shadow">
                <div className="row">
                    <div className="row"><div onClick={this.state.unShow} className="escape"><p className="close" aria-label="close">&times;</p></div></div>

                    {picture && picture.map((pictures, index) => {
                        return (

                            <div onClick={this.handleClick} className="col-md-4" key={index} id={pictures.media_id}>
                                <div className="thumbnail">
                                    <img src={pictures.url} className="img-thumbnail" />
                                </div>
                            </div>

                        );
                    })}
                </div>

            </div>
        );
    }
}
