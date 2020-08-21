import React from "react";
import { MDBInput, MDBIcon, MDBBtn } from 'mdbreact';
import "../assets/css/contact.css";

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/mzbjqvzy"
                method="POST"
            >
                <div className="grey-text">
                    <MDBInput label="Your Name" name="name" icon="user" group type="text" validate className="text" required/>
                    <MDBInput label="Your Email" name="email" icon="envelope" group type="email" validate error="wrong" success="right" className="text" required/>
                    <MDBInput label="Your Message" name="message" icon="pencil-alt" group type="textarea" validate rows="5" className="text" required />
                </div>
                {status === "SUCCESS" ?
                    <MDBBtn color="success" disabled className="float-right button-rounded">
                        Sent
                        <MDBIcon icon="check" className="ml-2" />
                    </MDBBtn>
                    :
                    <MDBBtn color="primary" className="float-right button-rounded" type="submit">
                        Send
                        <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                }
                {status === "ERROR" && <p className="align-bottom float-right">Oops! There was an error.</p>}
            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}