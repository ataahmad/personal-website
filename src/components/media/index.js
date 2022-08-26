import React from "react";
// import "App.css";
import "./media.css";
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
                    <img src={images[index].imgPath} alt="Email me for bookings!" className="main-image"></img>
                </figure>
            </div>
            <div className="row">
                <div className="row caption">
                    <figcaption>{images[index].caption}</figcaption>
                </div>
                <div className="row gallery">
                    <button className="toggle">
                        &lt;
                    </button>
                    <img src={images[0].imgPath} alt="Email me for bookings!" className={`thumbnail ${(index === 0 ? "selected" : "")}`}></img>
                    <img src={images[1].imgPath} alt="Email me for bookings!" className={`thumbnail ${(index === 1 ? "selected" : "")}`}></img>
                    <img src={images[2].imgPath} alt="Email me for bookings!" className={`thumbnail ${(index === 2 ? "selected" : "")}`}></img>
                    <img src={images[3].imgPath} alt="Email me for bookings!" className={`thumbnail ${(index === 3 ? "selected" : "")}`}></img>
                    <img src={images[4].imgPath} alt="Email me for bookings!" className={`thumbnail ${(index === 4 ? "selected" : "")}`}></img>
                    <button
                        className="toggle"
                        onClick={() => {
                            setImg((index + 1) % images.length);
                        }}
                    >
                        <span className="arrow">&gt;</span>
                    </button>
                </div>
            </div>
        </div>


    );

}

export default Media;