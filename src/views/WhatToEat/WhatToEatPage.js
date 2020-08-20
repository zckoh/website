import React, { useState } from "react";
import {
    MDBContainer, MDBBtn, MDBCollapse
} from "mdbreact";
import Emoji from '../../components/Emoji.js';
import EatOutTab from './Tabs/EatOutTab.js';
import CookTab from './Tabs/CookTab.js';


const WhatToEatPage = () => {
    document.title = "What To Eat! | zckoh.github.io"

    const [whichIsOpen, setWhichIsOpen] = useState("");
    const [collapseCloseSpeed, setcollapseCloseSpeed] = useState(0);

    const [cookingIsOpen, setCookingIsOpen] = useState(false);
    const toggleCooking = () => setCookingIsOpen(!cookingIsOpen);

    const [eatOutiIsOpen, setEatOutIsOpen] = useState(false);
    const toogleEatOut = () => setEatOutIsOpen(!eatOutiIsOpen);

    const openCookingCollapse = () => {
        toggleCooking();
        setWhichIsOpen("Cooking");
        setEatOutIsOpen(false);
    }

    const openEatOutCollapse = () => {
        setCookingIsOpen(false);
        toogleEatOut();
        setWhichIsOpen("Eat Out");
    }

    const setCloseCollapseSpeed = (id) => {
        if (id.trim() === whichIsOpen.trim()) {
            setcollapseCloseSpeed(1500);
        } else {
            setcollapseCloseSpeed(1);
        }
    }

    return (
        <main className="text padding-top font-weight-normal">
        <MDBContainer fluid className="my-5 pb-5 text-center justify-content-center content">
            <h1 className="pb-3 font-weight-bold">What To Eat!</h1>
            <MDBContainer fluid>
                <MDBBtn
                    color="primary"
                    onClick={() => { openCookingCollapse(); setCloseCollapseSpeed("Cooking");}}
                    style={{ marginBottom: "1rem", "textTransform": "none" }}
                >
                    Cook? (Save <Emoji symbol="💲💲" />)
                </MDBBtn>
                <MDBBtn
                    color="unique"
                    onClick={() => { openEatOutCollapse(); setCloseCollapseSpeed("Eat Out");}}
                    style={{ marginBottom: "1rem", "textTransform": "none" }}
                >
                    Eat Out? (Spend <Emoji symbol="💲💲" />)
                </MDBBtn>
                <MDBCollapse id="eatingInCollapse" delay={{hide: collapseCloseSpeed}} isOpen={cookingIsOpen}>
                    <CookTab />
                </MDBCollapse>
                <MDBCollapse id="eatingOutCollapse" delay={{hide: collapseCloseSpeed}} isOpen={eatOutiIsOpen}>
                    <EatOutTab />
                </MDBCollapse>
            </MDBContainer>
        </MDBContainer>
        </main>
    );
}

export default WhatToEatPage;