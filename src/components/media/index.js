import React from "react";
import './../../App.css';
import myImage from "./../../photos/car-personal.JPG";

const Media = () => {


    return (

        <div className="media-block">
            <figure className="figure">
                <img src={myImage} alt="Image" className="image"></img>
                {/* <figcaption>For now just a cool picture, but soon to be a sick photo gallery.</figcaption> */}
            </figure>
        </div>


    );

}

export default Media;