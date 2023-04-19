import React, { useState } from "react";
import "./infoSide.css";


const BioHeader = () => {
    return (
        <div className="welBanner">
            <h1 className="brand-name">
                Ata Ahmad
            </h1>
            <span className="titles">
                Software Engineer &nbsp; &bull; &nbsp; Photographer &nbsp; &bull; &nbsp; CBVA Volleyball Player
            </span>
        </div>
    );
}


const Bio = () => {

    return (
        <div className="bulletList">
            <ul>
                <li>
                    I did my undergraduate studies in Physics at UCSB.
                </li>
                <li>
                    I first got into coding by using Python in my labs.
                </li>
                <li>
                    I quickly realized how much I loved creating cool things with software.
                </li>
                <li>
                    I picked up Javascript within a week for in an interview I got at PayPal.
                </li>
                <li>
                    The interviews went well and I started after graduation in March 2020.
                </li>
                <li>
                    I developed invaluable skills and even earned a promotion into an SDET position.
                </li>
                <li>
                    My journey hit a road bump when I and 80% of my team were laid off.
                </li>
                <li>
                    Fortunately, resilience and an amazing network only made that a road bump.
                </li>
                <li>
                    I am now a Software Development Engineer in Test at&nbsp;
                    <a href="https://www.platformscience.com/" target="_blank" rel="noreferrer">
                        Platform Science
                    </a>
                    !
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
                    <a data-testid="linkedIn" href="https://www.linkedin.com/in/ataahmad9/" target="_blank" rel="noreferrer">Here is where you can find my Linkedin.</a>
                </li>
                <li>
                    <a href="https://github.com/ataahmad" target="_blank" rel="noreferrer">Here is where you can find all of my code.</a>
                </li>
                <li>
                    <a href="https://atasvisualizer.com" target="_blank" rel="noreferrer">Here is where you can find my most recent project.</a>
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
                <button className={((tab === "Bio") ? "selected-tab" : "tab")} onClick={handleBioClick}>About Me</button>
                <span className="tab">&nbsp;|&nbsp;</span>
                <button className={((tab === "Links") ? "selected-tab" : "tab")} data-testid="linkButton" onClick={handleLinkClick}>Links</button>
            </div>
            {tabInfo()}
        </div>
    );

}

export default InfoSide;