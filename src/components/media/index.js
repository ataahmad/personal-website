import React from "react";
import "./#root/App.css";

import image1 from "#photos/car-personal.JPG";
import image2 from "#photos/court-personal.JPG";
import image3 from "#photos/littleItaly-personal.JPG";
import image4 from "#photos/moon-personal.JPG";
import image5 from "#photos/sunset-exp-personal.JPG";


const images = [
    {
        caption: "Chasing Sunsets",
        imgPath: image1
    },
    {
        caption: "Net",
        imgPath: image2
    },
    {
        caption: "That's Amore",
        imgPath: image3
    },
    {
        caption: "And It Went Like",
        imgPath: image4
    },
    {
        caption: "Death Star",
        imgPath: image5
    },
];


const Media = () => {

    const [index, setImg] = React.useState(0);
    return (

        <div className="media-block">
            <div>
                <figure className="figure">
                    <img src={images[index].imgPath} alt="Image" className="image"></img>
                    <figcaption>{images[index].caption}</figcaption>
                </figure>
                <button
                    className="toggle"
                    onClick={() => {
                        setImg((index + 1) % images.length);
                    }}
                >Check out my shots.</button>
            </div>
        </div>


    );

}

export default Media;