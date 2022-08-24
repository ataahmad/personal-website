import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "App.css";
import "./infoSide.css";


const BioHeader = () => {
    return (
        <div className="welBanner">
            <h1 className="brand-name">
                Ata Ahmad
            </h1>
            <span className="titles">
                Software Engineer &nbsp; &bull; &nbsp; Photographer &nbsp; &bull; &nbsp; Volleyball Player
            </span>
        </div>
    );
}


const Bio = () => {

    return (
        <div className="bulletList">
            <ul>
                <li>
                    Graduated from UCSB in 2020
                </li>
                <li>
                    Got my first job at Honey (now PayPal)
                </li>
                <li>
                    Picked up a camera sometime last year.
                </li>
                <li>
                    Have not stopped since as you can tell &rarr;
                </li>
            </ul>
        </div>
    )

};

const Links = () => {

    return (
        <div>
            <ul>
                <li>
                    Here is my &nbsp;
                    <a href="https://www.linkedin.com/in/ataahmad9/" target="_blank" rel="noreferrer">LinkedIn</a>
                    &nbsp; in case you're into professional stuff.
                </li>
            </ul>
        </div>
    );
}



const InfoSide = () => {


    let [tab, setTab] = useState("Bio");

    const handleBioClick = () => {
        setTab("Bio");
    }

    const handleLinkClick = () => {
        setTab("Links");
    }

    let tabInfo = () => {
        switch (tab) {
            case "Bio":
                return <Bio />;
            case "Links":
                return <Links />;
            default:
                return <Bio />;
        }
    }

    return (
        <div className="left-content">
            <BioHeader />
            <button onClick={handleBioClick}> Bio</button>
            <button onClick={handleLinkClick}> Links</button>
            {tabInfo()}
        </div>
    );

}

export default InfoSide;