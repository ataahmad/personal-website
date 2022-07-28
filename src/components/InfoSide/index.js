import React from "react";
import "./#root/App.css";



const BioHeader = () => {
    return (
        <h1>
            Welcome to my personal site!
        </h1>
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
        <div>
            <BioHeader />
            <Bio />
        </div>
    );
}

export default InfoSide;