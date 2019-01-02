import React from "react";
import axios from "./axios";


export default class Gallery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {gallery: "", galleryid: props.galleryid, anim: false, currentid: ""};
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClick(e) {
        this.setState({anim: true, currentid: e.currentTarget.id});
    }

    handleClose() {
        this.setState({anim: false});
    }


    componentDidMount() {
        axios.get("/getgallery", {params: {galleryid: this.state.galleryid}}).then(resp => {

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

                        <div onClick={this.handleClick} className="col-md-4 mb-2 d-flex flex-column justify-content-center" key={index} id={pictures.media_id}>
                            <div className="thumbnail">
                                <img src={pictures.url} className="img-thumbnail"/>
                            </div>
                        </div>

                    );
                })}

                {this.state.anim &&
                    <div className="row fluid fixgallery">


                        <div id="aquarium" className="carousel slide w-100 d-flex justify-content-center" data-ride="carousel">

                            <ul className="carousel-indicators mb-5">
                                {gallery && gallery.map((elem, index) => {
                                    if(elem.media_id == this.state.currentid) {
                                        return(
                                            <li data-target="#aquarium" data-slide-to={index} className="active" key={index}></li>
                                        );
                                    } else {
                                        return(
                                            <li data-target="#aquarium" data-slide-to={index} key={index}></li>
                                        );
                                    }
                                })}

                            </ul>
                            <div className="carousel-inner w-75 h-100 d-flex flex-column justify-content-center align-items-center">
                                <div onClick={this.handleClose} className="escape d-flex justify-content-center"><p className="close" aria-label="close">&times;</p></div>
                                {gallery && gallery.map((elem, index) => {
                                    if(elem.media_id == this.state.currentid) {
                                        return(
                                            <div className="carousel-item active" key={index}><img src={elem.url} alt="" /></div>
                                        );
                                    } else {
                                        return(
                                            <div className="carousel-item" key={index}><img src={elem.url} alt="" /></div>
                                        );
                                    }

                                })}
                            </div>

                            <a className="carousel-control-prev" href="#aquarium" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a className="carousel-control-next" href="#aquarium" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>
                }
            </div>
        );
    }
}
