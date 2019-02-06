import React from "react";
import Nav from "./nav";
import MainContent from "./maincontent";
import { BrowserRouter, Route } from "react-router-dom";
import BeforePicture from "./before";
import Carousel from "./carousel";
import Home from "./home";
import Gallery from "./gallery";
import Contact from "./contact";



export default class App extends React.Component {
    constructor() {
        super();
        this.state = {visibleCarousel: true, visibleGallery: false, visibleContact: false, visibleBefore: false};

        this.showCarousel = this.showCarousel.bind(this);
        this.unShowCarousel = this.unShowCarousel.bind(this);
        this.showGallery = this.showGallery.bind(this);
        this.unShowGallery = this.unShowGallery.bind(this);
        this.showContact = this.showContact.bind(this);
        this.unShowContact = this.unShowContact.bind(this);
        this.showBefore = this.showBefore.bind(this);
        this.unShowBefore = this.unShowBefore.bind(this);
    }

    showCarousel() {
        this.setState({visibleCarousel: true});
    }

    unShowCarousel() {
        this.setState({visibleCarousel: false});
    }

    showGallery() {
        this.setState({visibleGallery: true});
    }

    unShowGallery() {
        this.setState({visibleGallery: false});
    }

    showContact() {
        this.setState({visibleContact: true});
    }

    unShowContact() {
        this.setState({visibleContact: false});
    }

    showBefore() {
        this.setState({visibleBefore: true});
    }

    unShowBefore() {
        this.setState({visibleBefore: false});
    }



    render() {



        return(
            <BrowserRouter>
                <div>


                    <Nav />

                    {this.state.visibleCarousel && <Carousel />}

                    <Route exact path = "/" render = { () => {
                        return <Home showCarousel = {this.showCarousel}
                            unShowContact = {this.unShowContact}
                            unShowGallery = {this.unShowGallery}/>;
                    }} />


                    <Route exact path = "/:id" render = { props => {

                        return <MainContent {...props}
                            key = { props.match.url}
                            showCarousel = {this.showCarousel}
                            unShowCarousel = {this.unShowCarousel}
                            showGallery = {this.showGallery}
                            unShowGallery = {this.unShowGallery}
                            showContact = {this.showContact}
                            unShowContact = {this.unShowContact}
                            showBefore = {this.showBefore}
                            unShowBefore = {this.unShowBefore} />;
                    }} />

                    {this.state.visibleGallery && <Gallery galleryid = {2} />}

                    {this.state.visibleContact && <Contact />}

                    {this.state.visibleBefore && <BeforePicture />}


                </div>
            </BrowserRouter>
        );
    }
}
