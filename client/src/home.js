import React from "react";
import axios from "./axios";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: "", showCarousel: props.showCarousel, unShowContact: props.unShowContact, unShowGallery: props.unShowGallery};

    }

    componentDidMount() {

        this.state.showCarousel();

        this.state.unShowContact();

        this.state.unShowGallery();

        axios.get("/getpages", {params: {page: "home"}}).then(resp => {

            this.setState({text: resp.data[0]});
        });
    }


    render() {
        return (
            <div className="fluid">

                <div dangerouslySetInnerHTML={{ __html: this.state.text.content }} />

            </div>
        );
    }
}
