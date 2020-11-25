import React from 'react';
import './AboutPage.css';
import { matchPath } from 'react-router-dom';

const AboutPage = (props) => {

    const isAboutPathActive = !!matchPath(
        props.location.pathname, 
        '/about'
        ); 

  return <div>
        <div className="top-container">
            <img className="top-cloud" src="images/cloud.png" alt="cloud-img" />
            <h1>I am Gajendra Adhikari</h1>
            <p>an information technology engineer</p>
            <img className="bottom-cloud" src="images/cloud.png" alt="cloud-img" />
            <img src="images/mountain.png" alt="mountain-img" />
        </div>

        <hr />

        <div className="bottom-container">
            <a className="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
            <a className="footer-link" href="https://twitter.com/">Twitter</a>
            <a className="footer-link" href="https://www.appbrewery.co/">Website</a>
            <p>© 2020 Gajendra Adhikari .</p>
        </div>
    </div>

};

export default AboutPage;