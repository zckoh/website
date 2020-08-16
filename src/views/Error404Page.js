import React from "react";
import { MDBContainer, MDBBtn } from "mdbreact";

const Error404Page = () => {
    return (
        <MDBContainer fluid className="my-5 pb-5 pt-5 text-center justify-content-center">
            <h1 className="h1-responsive font-weight-bold">ERROR 404</h1>
            <h2 className="h2-responsive">The page you’re looking for can’t be found.</h2>
            <MDBBtn
                color="primary"
                href="/"
                className="button-rounded"
            >
                Back to homepage
            </MDBBtn>
        </MDBContainer>
    );
}

export default Error404Page;