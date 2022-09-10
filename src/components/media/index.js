import React from "react";
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

    const [index, setInd] = React.useState(0);

    const handleRightClick = () => {
        const newInd = (index + 1) % images.length;
        setInd(newInd);
    };

    const handleLeftClick = () => {
        const newInd = index ? index - 1 : images.length - 1;
        setInd(newInd);
    };

    const handleImageClick = input => () => {
        const newInd = input;
        setInd(newInd);
    }


    return (

        <div className="media-block">
            <h3 className="row caption">Here is my life outside of coding</h3>
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
                    <button className="toggle" onClick={handleLeftClick}>
                        <span>&lt;</span>
                    </button>
                    <img src={images[0].imgPath} onClick={handleImageClick(0)} alt="Email me for bookings!" className={`thumbnail${(index === 0 ? " selected" : "")}`}></img>
                    <img src={images[1].imgPath} onClick={handleImageClick(1)} alt="Email me for bookings!" className={`thumbnail${(index === 1 ? " selected" : "")}`}></img>
                    <img src={images[2].imgPath} onClick={handleImageClick(2)} alt="Email me for bookings!" className={`thumbnail${(index === 2 ? " selected" : "")}`}></img>
                    <img src={images[3].imgPath} onClick={handleImageClick(3)} alt="Email me for bookings!" className={`thumbnail${(index === 3 ? " selected" : "")}`}></img>
                    <img src={images[4].imgPath} onClick={handleImageClick(4)} alt="Email me for bookings!" className={`thumbnail${(index === 4 ? " selected" : "")}`}></img>
                    <button className="toggle" onClick={handleRightClick}>
                        <span className="arrow">&gt;</span>
                    </button>
                </div>
            </div>
        </div>


    );

}

export default Media;