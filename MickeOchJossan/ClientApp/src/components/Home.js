import React, { Component } from 'react';
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export class Home extends Component {
    static displayName = Home.name;

    componentDidMount() {
        document.getElementById("polaroidID").innerHTML = decodeURI("Bröllop");
    }

    render() {
        return (
            <div>
                <div className="cardContainer">
                    <div className="card">
                        <div className="carouselContainer">
                            <Carousel />
                            <div className="polaroidText" id="polaroidID">
                            </div>
                        </div>
                        <div className="card-lower">
                            <div className="text-center rubrik">
                                Save The Date
                        </div>
                            <div className="text-center paragraf">
                                13 Juni 2020
                        </div>
                        </div>
                    </div>
                </div>
                <div className="text-center footer">
                    <div className="text-center tag">#MickeOchJossan2020</div>
                </div>
            </div>
        );
    }
}
