import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import ContactForm from '../../components/ContactForm.js';
import Emoji from '../../components/Emoji.js';
const ContactPage = () => {

    document.title = "Contact | zckoh.github.io"

    return (
        <main className="text padding-top">
            <MDBContainer className="my-5 pb-5 justify-content-center">

                <h1 className="h1-responsive font-weight-bold pb-5 text-center">Hey, Let's get in touch! <Emoji symbol="🤝" /></h1>
                <MDBRow>
                    <MDBCol md="6">
                        <div className="pb-5">
                            <h4 className="text-center">Feel free to send me a message. I am currently open to any part-time work opportunities.</h4>
                        </div>

                        <div className="pt-3 pb-3">
                            <p className="h6">Need help?</p>
                            <a className="amber-text" href="mailto:zckoh96@gmail.com">zckoh96@gmail.com</a>
                        </div>

                        <div>
                            <a href="https://github.com/zckoh" target="_blank" rel="noopener noreferrer" className="text pr-3" style={{ fontSize: `30px` }}>
                                <MDBIcon fab icon="github" />
                            </a>
                            <a href="http://www.linkedin.com/in/zackoh" target="_blank" rel="noopener noreferrer" className="text pr-3" style={{ fontSize: `30px` }}>
                                <MDBIcon fab icon="linkedin" />
                            </a>
                            <a href="https://www.kaggle.com/zckoh20" target="_blank" rel="noopener noreferrer" className="text" style={{ fontSize: `30px` }}>
                                <MDBIcon fab icon="kaggle" />
                            </a>
                        </div>
                    </MDBCol>
                    <MDBCol md="6">
                        <ContactForm />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </main>
    );
}

export default ContactPage;