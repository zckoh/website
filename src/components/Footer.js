import React from 'react';
import { MDBFooter, MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import Emoji from '../components/Emoji.js';
import "../assets/css/footer.css";

const Footer = () => {
    return (
        <MDBFooter className="footer font-small pt-4">
            <MDBContainer fluid className="text-center d-flex justify-content-center">
                <h5>Contact Details</h5>
            </MDBContainer>
            <MDBContainer id="contacts-container" fluid className="text-center justify-content-center">
                <MDBBtn size="lg" href="mailto:zckoh96@gmail.com" id="email-button" color="grey" className="button-rounded">
                    <MDBIcon icon="envelope" className="pr-1" /> Email
                </MDBBtn>
                <MDBBtn size="lg" href="https://github.com/zckoh" target="_blank" rel="noopener noreferrer" id="github-button" className="button-rounded">
                    <MDBIcon fab icon="github" className="pr-1" /> Github
                </MDBBtn>
                <MDBBtn size="lg" href="http://www.linkedin.com/in/zackoh" target="_blank" rel="noopener noreferrer" id="linkedin-button" className="button-rounded">
                    <MDBIcon fab icon="linkedin-in" className="pr-1" /> Linkedin
                </MDBBtn>
            </MDBContainer>
            <MDBContainer fluid className="footer-copyright text-center pt-3 d-flex justify-content-center">
                <p>&copy; {new Date().getFullYear()} Copyright: Created by Zac with <Emoji symbol="🧡" /></p>
            </MDBContainer>
        </MDBFooter>
    );
}

export default Footer;