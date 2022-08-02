import React from "react";
import "./#root/App.css";



const BioHeader = () => {
    return (
        <div className="welBanner">
            <h1>
                Welcome to my personal site!
            </h1>
        </div>
    );
}


const Bio = () => {

    return (
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
        </ul>
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