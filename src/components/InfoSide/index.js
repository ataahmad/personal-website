import React, { useState } from "react";
// import { Link } from "react-router-dom";
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
                    I went to UCSB and studied Physics.
                </li>
                <li>
                    I picked up programming in order to complete my Physics labs.
                </li>
                <li>
                    After a lot of data analysis using Python, I found my new passion.
                </li>
                <li>
                    I knew I wanted to spend my career building cool things with this talent.
                </li>
                <li>
                    I picked up Javascript within a week to code in interviews at PayPal.
                </li>
                <li>
                    Those interviews went well and I started after graduation in March 2020.
                </li>
                <li>
                    Have not stopped since as you can tell.
                </li>
            </ul>
        </div>
    )

};

const Links = () => {

    return (
        <div className="bulletList">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/ataahmad9/" target="_blank" rel="noreferrer">Here is my LinkedIn in case you're into professional stuff.</a>
                </li>
                <li>
                    <a href="https://github.com/ataahmad" target="_blank" rel="noreferrer">Here is where you can find all of my code.</a>
                </li>
            </ul>
        </div>
    );
}



const InfoSide = () => {


    const [tab, setTab] = useState("Bio");

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
            <div className="tabHolder">
                <button className="tab" onClick={handleBioClick}>Bio</button>
                <button className="tab" onClick={handleLinkClick}>|&nbsp;&nbsp;Links</button>
            </div>
            {tabInfo()}
        </div>
    );

}

export default InfoSide;