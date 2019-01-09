import React from "react";

export default class Contact extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {};
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log(this.state);
    }

    render() {
        return (
            <div className="row m-5">

                <form onClick={this.handleSubmit} className="form-horizontal w-100">



                    <div className="form-group col-sm-5">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="fas fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Your Name" aria-label="name" aria-describedby="basic-addon1" name="name" onChange={this.handleChange}/>
                        </div>
                    </div>


                    <div className="form-group col-sm-5">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="fas fa-at"></i></span>
                            </div>
                            <input type="emnail" className="form-control" placeholder="Your Email" aria-label="email" aria-describedby="basic-addon1" name="email" onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="form-group col-sm-5">
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
            </div>
        );
    }
}
