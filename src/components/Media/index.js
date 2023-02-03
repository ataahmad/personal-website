import { React, useState } from "react";
import "./media.css";
import { IMAGES } from "constants";


const Media = props => {

    const [index, setInd] = useState(0);

    const handleRightClick = () => {
        const newInd = (index + 1) % IMAGES.length;
        setInd(newInd);
    };

    const handleLeftClick = () => {
        const newInd = index ? index - 1 : IMAGES.length - 1;
        setInd(newInd);
    };

    const handleImageClick = input => () => {
        const newInd = input;
        setInd(newInd);
    }


    return (

        <div className="media-block">
            <h3 className="row caption">Here is a peek into my life outside of coding</h3>
            <div className="row">
                <figure className="figure">
                    <img 
                    src={IMAGES[index].imgPath}
                    alt="Email me for bookings!"
                    className="main-image"
                    ></img>
                </figure>
            </div>
            <div className="row">
                <div className="row caption">
                    <figcaption>{IMAGES[index].caption}</figcaption>
                </div>
                <div className="row gallery">
                    <button className="toggle" onClick={handleLeftClick}>
                        <span>&lt;</span>
                    </button>
                    <img src={IMAGES[0].imgPath} onClick={handleImageClick(0)} alt="Email me for bookings!" className={`thumbnail${(index === 0 ? " selected" : "")}`}></img>
                    <img src={IMAGES[1].imgPath} onClick={handleImageClick(1)} alt="Email me for bookings!" className={`thumbnail${(index === 1 ? " selected" : "")}`}></img>
                    <img src={IMAGES[2].imgPath} onClick={handleImageClick(2)} alt="Email me for bookings!" className={`thumbnail${(index === 2 ? " selected" : "")}`}></img>
                    <img src={IMAGES[3].imgPath} onClick={handleImageClick(3)} alt="Email me for bookings!" className={`thumbnail${(index === 3 ? " selected" : "")}`}></img>
                    <img src={IMAGES[4].imgPath} onClick={handleImageClick(4)} alt="Email me for bookings!" className={`thumbnail${(index === 4 ? " selected" : "")}`}></img>
                    <button className="toggle" onClick={handleRightClick}>
                        <span className="arrow">&gt;</span>
                    </button>
                </div>
            </div>
        </div>


    );

}

export default Media;