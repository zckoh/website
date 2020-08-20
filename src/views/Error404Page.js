import React from "react";
import { MDBContainer, MDBBtn } from "mdbreact";
import { NavLink } from 'react-router-dom';

const Error404Page = () => {
    document.title = "ERROR 404 | zckoh.github.io"

    return (
        <main className="text padding-top">
            <MDBContainer fluid className="my-5 pb-5 text-center justify-content-center">
                <h1 className="h1-responsive font-weight-bold">ERROR 404</h1>
                <h2 className="h2-responsive pb-3">The page you’re looking for can’t be found.</h2>
                <NavLink to={"/"}>
                    <MDBBtn
                        color="primary"
                        className="button-rounded"
                    >
                        Back to homepage
                    </MDBBtn>
                </NavLink>
            </MDBContainer>
        </main>
    );
}

export default Error404Page;