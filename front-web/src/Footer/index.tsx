import React from "react";
import './styles.css';
import {ReactComponent as InstagramIcon} from './instagram.svg';
import {ReactComponent as LinkedinIcon} from './linkedin.svg';
import {ReactComponent as YoutubeIcon} from './youtube.svg';


function Footer() {
    
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="youtube" target="_new">
                    <YoutubeIcon />
                </a>
                <a href="linkedin" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="instagram" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;