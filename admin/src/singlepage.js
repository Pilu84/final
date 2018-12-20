import React from "react";
import axios from "./axios";
import { Editor } from '@tinymce/tinymce-react';
import Uploader from "./uploader";


export default class SinglePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: "", editTitle: false, saved: false, unShow: props.unShowSinglePage, unShowUploader: props.unShowUploader };
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showEdit = this.showEdit.bind(this);
        this.editSubmit = this.editSubmit.bind(this);
        this.addToContent = this.addToContent.bind(this);

    }



    addToContent(data) {
        this.setState({newpicture: data});
    }

    editSubmit(e) {
        e.preventDefault();
        axios.post("/setsinglepagename/" + this.props.pageid, this.state).then(resp => {
            this.setState({text: resp.data[0], editTitle: false});

        });
    }

    showEdit() {
        this.setState({editTitle: true});
    }



    handleEditorChange(e) {

        this.setState({
            maincontent: e.target.getContent()
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    handleSubmit(e) {
        e.preventDefault();
        axios.post("/setsinglepage/" + this.props.pageid, this.state).then(resp => {
            this.setState({text: resp.data[0], saved: true});
            setTimeout(function(){ this.setState({saved: false}); }.bind(this), 3000);
        });

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


        return (

            <div>
                <button className ="btn btn-primary mt-5 mb-5" onClick = {this.state.unShow}>Back to list</button>
                {!this.state.editTitle && <div className = "row">{this.state.text.title} <button onClick = {this.showEdit} className = "btn btn-primary mt-5 mb-5">Edit Title </button></div>}

                {this.state.editTitle &&
                        <form onSubmit={this.editSubmit} className = "mb-5">
                            <input onChange = { this.handleChange } name = "homepagename" type="text" />
                            <button className = "btn btn-primary mt-5 mb-5">Save</button>
                        </form>
                }
                {this.state.saved && <div className="alert alert-success">
                    <strong>Success!</strong>

                </div>}
                <div className="d-none row fix-picture bg-light" id="hi"></div>

                <form onSubmit={this.handleSubmit}>



                    <Editor
                        apiKey='ypsenvpusy2kkhk3uoz1dmg5730yfcmbclt42ttpfo898oxr'
                        initialValue={this.state.text.content}
                        init={{
                            plugins: 'code visualblocks',
                            toolbar: 'undo redo | bold italic | code | image | customButton addhalf add3',
                            visualblocks_default_state: true,
                            end_container_on_empty_block: true,

                            content_css: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",

                            width: 1100,
                            height: 700,
                            setup: function (editor) {
                                editor.addButton('customButton', {
                                    text: 'Add Picture',
                                    context: 'tags',
                                    onClick: function() {
                                        var hi = document.getElementById("hi");
                                        hi.classList.add("d-flex");

                                        axios.get("/getmedia").then(resp => {
                                            console.log("a resp.data: ", resp.data);
                                            var html;

                                            for (var i = 0; i < resp.data.length; i++) {
                                                html += '<div class="col-md-4"><div class="thumbnail"><img src=" ' + resp.data[i].url + '" class="img-thumbnail" id="'+resp.data[i].media_id+'"></div></div>';
                                            }

                                            $("#hi").html(html);

                                            const picture = $(".img-thumbnail");

                                            picture.on("click", (e) => {

                                                editor.insertContent('<img src="' + e.currentTarget.src+ '" class = "img-fluid own-shadow">');
                                                $('#hi').removeClass("d-flex");
                                            });
                                        });
                                    }
                                });

                                editor.addButton('addhalf', {
                                    text: 'Add 2 column',
                                    context: "tag",
                                    onClick: () => {
                                        editor.insertContent(
                                            '<div class="col-sm-6 p-5">&nbsp;</div><div class="col-sm-6 p-5">&nbsp;</div>'
                                        );
                                    }

                                });
                                editor.addButton('add3', {
                                    text: 'Add 3 column',
                                    context: "tag",
                                    onClick: () => {
                                        editor.insertContent(
                                            '<div class="col-sm-4 p-5">&nbsp;</div><div class="col-sm-4 p-5">&nbsp;</div><div class="col-sm-4 p-5">&nbsp;</div>'
                                        );
                                    }

                                });
                            }

                        }}
                        onChange={this.handleEditorChange}
                    />


                    <button className = "btn btn-primary mt-5 mb-5">Save</button>
                    <input type="hidden" name="_csrf" value="{{csrfToken}}" />
                </form>


            </div>
        );
    }
}
