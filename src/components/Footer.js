import React from 'react';
import styled from 'styled-components';
import { Link as LinkS } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt, faArrowAltCircleRight, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
library.add(
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter,
  faInstagram
);

const NavItems = styled.ul`
    color: white;
    display: flex;
    list-style: none;
    padding-top:5px;
    justify-content: center;
    `;
const Links = styled(LinkS)`
        color: white;
        cursor: pointer;
        text-decoration: none;
        justify-content: space-between;
        padding: 0px 5px;
        &:hover{
            transition: all 0.2s ease-in-out;
            color:#01Bf71;
        }
    `
const iconstyle = { fontSize: "14px" }



const FooterContainer = styled.div`

      background-color: #212529;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
      text-align: center;
      padding-bottom: 2vh;
      position: relative;
      margin-top: auto;
      
    `;

const paragraph = {
  position: "relative",
  bottom: "0px"
}
const buttonstyle = {
  margin: "5px",
  fontSize: "1.5rem"
}
const style = {
  paddingTop: "1.5rem"
}

const Footer = () => {

  return <>
    <FooterContainer>
      <div style={style}>
        <Links to="#"><FontAwesomeIcon icon={['fab', 'facebook']} style={buttonstyle} /></Links>
        <Links to="#"><FontAwesomeIcon icon={['fab', 'twitter']} style={buttonstyle} /></Links>
        <Links to="#"><FontAwesomeIcon icon={['fab', 'google']} style={buttonstyle} /></Links>
        <Links to="#"><FontAwesomeIcon icon={['fab', 'instagram']} style={buttonstyle} /></Links>
      </div>
      <div>
        <NavItems>
          <Links to="/converter"><FontAwesomeIcon icon={faArrowAltCircleRight} style={iconstyle} /> Classify</Links>
          {/* <Links to="/tutorial"><FontAwesomeIcon icon={faFileAlt} style={iconstyle} /> How to use?</Links> */}
          <Links to="/contact"><FontAwesomeIcon icon={faPhoneAlt} style={iconstyle} /> Contact us</Links>
        </NavItems>
      </div>
      <p style={paragraph}>&copy;2022 Old Image Restoration. All Right Reserved | <Links to="#">Terms and Condition</Links></p>
    </FooterContainer>

  </>;
};

export default Footer;
