import React from "react";
import axios from "./axios";
import SinglePage from "./singlepage";

export default class AddNewPage extends React.Component {
    constructor() {
        super();
        this.state = {showPage: false, navname: ""};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    handleSubmit(e) {
        e.preventDefault();

        axios.post("/createnewpage", this.state).then(resp => {
            this.setState({showPage: true, pageId: resp.data[0].id});
        });

        var newName = [...this.state.navname, this.state.title];

        let sendData = {navname: JSON.stringify(newName)};

        console.log("a navname: ", sendData, typeof sendData);
        axios.post("/updatenav", sendData).then(resp => {
            this.setState({navname: resp.data});
        });
    }

    componentDidMount() {
        axios.get("/getnaviname").then(resp=> {

            this.setState({navname: resp.data});
        });
    }
    render() {
        console.log(typeof this.state.navname, this.state.navname);
        return(
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div className="pages">
                    <h1>Add new page</h1>

                    <div className="container">
                        <form onSubmit = {this.handleSubmit}>

                            <input onChange = {this.handleChange} type="text" name="title" placeholder = "Title" />
                            <button className = "btn btn-primary mt-5 mb-5">Save</button>
                        </form>
                    </div>

                    {this.state.showPage && <SinglePage pageid={this.state.pageId}/>}

                </div>

            </main>
        );
    }
}
