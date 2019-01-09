import React from "react";
import axios from "./axios";
import Carousel from "./carousel";
import Gallery from "./gallery";
import Contact from "./contact";

export default class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {text: "", pageid: "", galleryid: 2};

    }


    componentDidMount() {


        let pageid;


        if (!this.props.match.params.id) {
            pageid = "home";
            this.setState({pageId: "home"});
        } else {
            pageid = this.props.match.params.id;
            this.setState({pageId: this.props.match.params.id});
        }

        axios.get("/getpages", {params: {page: pageid}}).then(resp => {


            if(resp.data.length == 0) {
                location.replace("/");
            }
            this.setState({text: resp.data[0]});
        });
    }

    render() {

        //lehet at kellene tenni mindent az apba, es onnan intezni a content betoltest
        // TODO: Write carousel, gallery, contact to app
        if (!this.state.text.content) {
            return null;
        }

        const carousel = (pageid) => {
            if (pageid == "home") {
                return <Carousel />;
            }
        };

        const gallery = (pageid) => {
            if(pageid == "gallery") {
                return <Gallery galleryid = {this.state.galleryid}/>;
            }
        };

        const contact = (pageid) => {
            if (pageid == "contact") {
                return <Contact />;
            }
        };
        return (
            <div>
                {carousel(this.state.pageId)}


                <div dangerouslySetInnerHTML={{ __html: this.state.text.content }} />
                {contact(this.state.pageId)}
                {gallery(this.state.pageId)}
            </div>
        );
    }
}
