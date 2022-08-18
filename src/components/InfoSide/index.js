import React from "react";
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
                    My name is Ata.
                </li>
                <li>
                    I'm a Software Engineer, Photographer and Volleyball Player.
                </li>
                <li>
                    This is my personal site.
                </li>
                <li>
                    Scope some of my work on the right.
                </li>
                <li>
                    Here is my &nbsp;
                    <a href="https://www.linkedin.com/in/ataahmad9/" target="_blank" rel="noreferrer">LinkedIn</a>
                    &nbsp; in case you're into professional stuff.
                </li>
            </ul>
        </div>
    )

};


const InfoSide = () => {

    return (
        <div className="left-content">
            <BioHeader />
            <Bio />
        </div>
    );
}

export default InfoSide;