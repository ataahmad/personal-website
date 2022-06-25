import React from "react";
import 'App.css'
import myImage from "photos/car-personal.JPG";

const Media = () => {


    return (

        <div className="row media-block">

            <figure>
                <img src={myImage} alt="Image" className="image"></img>
                <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
            </figure>
        </div>


    );

}

export default Media;