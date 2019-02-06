import React from "react";
import $ from 'jquery';

export default class Before extends React.Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
        this.handleMove = this.handleMove.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
    }

    handleMove() {
        
    }

    componentDidMount() {

    }

    render() {

        var left = $("#pane1");
        var slider = $("#slider");
        var container = $("#containerresize");

        slider.on("mousedown", function(e) {
            e.preventDefault();
            container.on("mousemove", function(e) {
                if (
                    e.clientX <=
                container.offset().left +
                    container.outerWidth() -
                    slider.width()
                ) {
                    slider.css({ left: e.clientX - container.offset().left });
                    left.css(
                        "width",
                        slider.offset().left - container.offset().left
                    );
                }
            });
        });

        $(document).on("mouseup", function() {
            container.unbind("mousemove");
        });
        return(
            <div className="row">
                <div id="containerresize" onMove = {this.handleMove}>
                    <div className="pane" id="pane1"><img src="https://s3.amazonaws.com/aquariumdesign/j-iIPmfVsqHHukjx0LBLgeHJd2JjC96D.jpg" className = "paneimg" /></div>
                    <div className="pane" id="pane2"><img src="https://s3.amazonaws.com/aquariumdesign/d6b8BIZD2b48YGiansQTDc0No-Sx2hOB.jpg" className = "paneimg"/></div>
                    <div id="bar" onDown = {this.handleClick}></div>
                </div>
            </div>
        );
    }
}
