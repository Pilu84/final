import React from "react";
import axios from "./axios";
const API_PATH = 'http://localhost:8080/api/contact/index.php';


export default class Contact extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {error: false, submitted: false};
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            messageEmail: "",
            messageName: "",
            messageMessage: "",
            mailSent: false
        });

        const {email, name, message } = this.state;



        if(!email || !name || !message) {
            if(!email) {
                this.setState({messageEmail: "Email"});
            }

            if(!name) {
                this.setState({messageName: "Name"});
            }

            if(!message) {
                this.setState({messageMessage: "Email"});
            }

            return;
        }

        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
          })
        .then(result => {
          this.setState( {
            mailSent: result.data.sent
          })
          console.log(this.state);
        })
        .catch(error => this.setState( { error: error.message } ));
    };

        // axios.post("./contactform.php", this.state).then(resp => {
        //     console.log(resp.data);
        //
        //     if(resp.data.error) {
        //         this.setState({error: true});
        //         return;
        //     }
        //
        //     if(resp.data.succes) {
        //         this.setState({submitted: true});
        //     }
        // });
    }



    render() {


        return (
            <div className="row m-5">
                {!this.state.submitted &&
                <form onSubmit={this.handleSubmit} className="form-horizontal w-100" action="#">
                    { this.state.error && <div className="alert alert-danger"> Sorry, but something be wrong, please try again! </div>}


                    <div className="form-group col-sm-5">
                        { this.state.messageName && <div className="alert alert-danger"> {this.state.messageName} is required! Please try again! </div>}
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="fas fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Your Name" aria-label="name" aria-describedby="basic-addon1" name="name" onChange={this.handleChange}/>
                        </div>
                    </div>


                    <div className="form-group col-sm-5">
                        { this.state.messageEmail && <div className="alert alert-danger"> {this.state.messageEmail} is required! Please try again! </div>}
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="fas fa-at"></i></span>
                            </div>
                            <input type="email" className="form-control" placeholder="Your Email" aria-label="email" aria-describedby="basic-addon1" name="email" onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="form-group col-sm-5">
                        { this.state.messageMessage && <div className="alert alert-danger"> {this.state.messageMessage} is required! Please try again! </div>}
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Üzenet</span>
                            </div>

                            <textarea className="form-control" rows="5" name="message" onChange={this.handleChange}></textarea>
                        </div>
                    </div>

                    <div className="form-group col-sm-5">
                        <div className="input-group mb-3">
                            <button className = "btn btn-primary mt-5 mb-5">Send Email</button>
                        </div>
                    </div>



                </form>
                }
            </div>
        );
    }
}
