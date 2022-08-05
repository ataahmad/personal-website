import React from "react";
import "App.css";
const cdnBase = "https://d1vyza13emfewt.cloudfront.net";


const images = [
    {
        caption: "Chasing Sunsets",
        imgPath: cdnBase + "/car-personal.JPG"
    },
    {
        caption: "Net",
        imgPath: cdnBase + "/court-personal.JPG"
    },
    {
        caption: "That's Amore",
        imgPath: cdnBase + "/littleItaly-personal.JPG"
    },
    {
        caption: "And It Went Like",
        imgPath: cdnBase + "/moon-personal.JPG"
    },
    {
        caption: "Death Star",
        imgPath: cdnBase + "/sunset-exp-personal.JPG"
    },
];


const Media = () => {

    const [index, setImg] = React.useState(0);
    return (

        <div className="media-block">
            <div className="row">
                <figure className="figure">
                    <img src={images[index].imgPath} alt="Image" className="image"></img>
                </figure>
            </div>
            <div className="row">
                <div className="row caption">
                    <figcaption>{images[index].caption}</figcaption>
                </div>
                <div className="row browse">
                    <button
                        className="toggle"
                        onClick={() => {
                            setImg((index + 1) % images.length);
                        }}
                    >Check out my shots.
                    </button>
                </div>
            </div>
        </div>


    );

}

export default Media;