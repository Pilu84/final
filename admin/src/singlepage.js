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



        console.log("a state singlepage: ", this.state);
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
                <div className="d-none" id="hi"><Uploader unShow = {this.state.unShowUploader} addToContent = {this.addToContent}/></div>

                <form onSubmit={this.handleSubmit}>

                    {this.state.saved && <div className="alert alert-success">
                        <strong>Success!</strong>
                    </div>}

                    <Editor
                        apiKey='ypsenvpusy2kkhk3uoz1dmg5730yfcmbclt42ttpfo898oxr'
                        initialValue={this.state.text.content}
                        init={{
                            plugins: 'link image code ',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code styleselect | image | customButton',


                            style_formats: [
                                {title: 'Headers', items: [
                                    {title: 'Header 1', format: 'h1'},
                                    {title: 'Header 2', format: 'h2'},
                                    {title: 'Header 3', format: 'h3'},
                                    {title: 'Header 4', format: 'h4'},
                                    {title: 'Header 5', format: 'h5'},
                                    {title: 'Header 6', format: 'h6'}
                                ]},
                                {title: 'Inline', items: [
                                    {title: 'Bold', icon: 'bold', format: 'bold'},
                                    {title: 'Italic', icon: 'italic', format: 'italic'},
                                    {title: 'Underline', icon: 'underline', format: 'underline'},
                                    {title: 'Strikethrough', icon: 'strikethrough', format: 'strikethrough'},
                                    {title: 'Superscript', icon: 'superscript', format: 'superscript'},
                                    {title: 'Subscript', icon: 'subscript', format: 'subscript'},
                                    {title: 'Code', icon: 'code', format: 'code'}
                                ]},
                                {title: 'Blocks', items: [
                                    {title: 'Paragraph', format: 'p'},
                                    {title: 'Blockquote', format: 'blockquote'},
                                    {title: 'Div', format: 'div'},
                                    {title: 'Pre', format: 'pre'}
                                ]},
                                {title: 'Alignment', items: [
                                    {title: 'Left', icon: 'alignleft', format: 'alignleft'},
                                    {title: 'Center', icon: 'aligncenter', format: 'aligncenter'},
                                    {title: 'Right', icon: 'alignright', format: 'alignright'},
                                    {title: 'Justify', icon: 'alignjustify', format: 'alignjustify'}
                                ]}
                            ],
                            content_css: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",

                            width: 1100,
                            height: 700,
                            setup: function (editor) {
                                console.log("ez az enyem", this.state);
                                editor.addButton('customButton', {
                                    text: 'Upload Picture',
                                    context: 'tags',
                                    onClick: function() {
                                        var hi = document.getElementById("hi");
                                        hi.classList.add("d-block");

                                    }
                                });
                            }

                        }}
                        onChange={this.handleEditorChange}
                    />


                    <button className = "btn btn-primary mt-5 mb-5">Save</button>

                </form>


            </div>
        );
    }
}
