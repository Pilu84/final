import React from "react";
import axios from "./axios";
import Carousel from "./carousel";

export default class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {text: "", pageid: ""};

    }


    componentDidMount() {


        let pageid;


        if (!this.props.match.params.id) {
            pageid = 1;
            this.setState({pageId: 1});
        } else {
            pageid = this.props.match.params.id;
            this.setState({pageId: this.props.match.params.id});
        }

        axios.get("/getpages", {params: {page: pageid}}).then(resp => {

            this.setState({text: resp.data[0]});
        });
    }

    render() {

        console.log("a props: ", this.state.pageId);
        if (!this.state.text.content) {
            return null;
        }

        const carousel = (pageid) => {
            if (pageid == 1) {
                return <Carousel />;
            }
        };
        return (
            <div>
                {carousel(this.state.pageId)}
                <div dangerouslySetInnerHTML={{ __html: this.state.text.content }} />
            </div>
        );
    }
}
