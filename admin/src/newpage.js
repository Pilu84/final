import React from "react";

export default class AddNewPage extends React.Component {
    constructor() {
        super();
    }

    render() {
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

                </div>

            </main>
        );
    }
}
