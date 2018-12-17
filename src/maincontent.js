import React from "react";
import axios from "./axios";

export default class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {text: ""};

    }


    componentDidMount() {

        axios.get("/getpages", {params: {page: 1}}).then(resp => {
            this.setState({text: resp.data[0]});
        });
    }


    render() {

        if (!this.state.text.content) {
            return null;
        }
        return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: this.state.text.content }} />
            </div>
        );
    }
}
