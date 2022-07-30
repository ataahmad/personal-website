import React from "react";
import "./#root/App.css";
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