import React from "react";
import axios from "./axios";


export default class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: "", pageid: "", galleryid: 2, showCarousel: props.showCarousel, unShowCarousel: props.unShowCarousel, showGallery: props.showGallery, unShowGallery: props.unShowGallery, showContact: props.showContact, unShowContact: props.unShowContact};

    }


    componentDidMount() {

        this.state.unShowCarousel();

        this.state.unShowContact();

        this.state.unShowGallery();

        let pageid = this.props.match.params.id;
        this.setState({pageId: this.props.match.params.id});

        if(pageid == "gallery") {
            this.state.showGallery();
        }

        if(pageid == "contact") {
            this.state.showContact();
        }


        axios.get("/getpages", {params: {page: pageid}}).then(resp => {


            if(resp.data.length == 0) {
                location.replace("/");
            }
            this.setState({text: resp.data[0]});
        });
    }

    render() {


        if (!this.state.text.content) {
            return null;
        }


        return (
            <div className="fluid">

                <div className="fluid" dangerouslySetInnerHTML={{ __html: this.state.text.content }} />

            </div>
        );
    }
}
