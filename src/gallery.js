import React from "react";
import axios from "./axios";


export default class Gallery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {gallery: "", galleryid: props.galleryid, anim: false, currentid: ""};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({anim: true, currentid: e.currentTarget.media_id});
    }


    componentDidMount() {
        axios.get("/getgallery", {params: {galleryid: this.state.galleryid}}).then(resp => {
            console.log("resp: ", resp.data);
            this.setState({gallery: resp.data});
        });
    }
    render() {


        const { gallery } = this.state;

        if(!gallery) {
            return null;
        }
        return(
            <div className="row m-5">

                {gallery && gallery.map((pictures, index) => {
                    return (

                        <div onClick={this.handleClick} className="col-md-4 mb-2 d-flex flex-column justify-content-center" key={index}>
                            <div className="thumbnail">
                                <img src={pictures.url} className="img-thumbnail"/>
                            </div>
                        </div>

                    );
                })}

                {this.state.anim &&
                    <div className="jumbotron mt-5 mh-100">


                        <div id="aquarium" className="carousel slide" data-ride="carousel">
                            <ul className="carousel-indicators">
                                <li data-target="#aquarium" data-slide-to="0" className="active"></li>
                                <li data-target="#aquarium" data-slide-to="1"></li>
                                <li data-target="#aquarium" data-slide-to="2"></li>
                            </ul>

                            {gallery && gallery.map((el, index) => {


                                return(
                                    <div className="carousel-inner" key={index}>
                                        <div className="carousel-item">
                                            <img src={el.url} alt="" />
                                        </div>
                                    </div>

                                );
                            })}


                        </div>
                    </div>
                }
            </div>
        );
    }
}
