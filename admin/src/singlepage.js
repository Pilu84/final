import React from "react";
import axios from "./axios";

export default class SinglePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ""};

    }

    componentDidMount() {
        axios.get("/getpages", {params: {page: this.props.pageid}}).then(resp => {
            this.setState({text: resp.data[0]});
        });
    }

    render() {

        if (!this.state.text.content) {
            return null;
        }

        console.log("this text, singlepage: ", this.state.text);
        return (
            <div>
                <textarea rows="40" cols="120">

                    {this.state.text.content}
                </textarea>
            </div>
        );
    }
}
