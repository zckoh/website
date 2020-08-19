import React, { useState } from "react";
import {
    MDBContainer, MDBBtn, MDBCollapse
} from "mdbreact";
import Emoji from '../../components/Emoji.js';
import EatOutTab from './Tabs/EatOutTab.js';
// import FoodDeliveryTab from './Tabs/FoodDeliveryTab.js';
import CookTab from './Tabs/CookTab.js';


const WhatToEatPage = () => {
    const [whichIsOpen, setWhichIsOpen] = useState("");
    const [collapseCloseSpeed, setcollapseCloseSpeed] = useState(0);

    const [cookingIsOpen, setCookingIsOpen] = useState(false);
    const toggleCooking = () => setCookingIsOpen(!cookingIsOpen);

    // const [foodDeliveryIsOpen, setFoodDeliveryIsOpen] = useState(false);
    // const toggleFoodDelivery = () => setFoodDeliveryIsOpen(!foodDeliveryIsOpen);

    const [eatOutiIsOpen, setEatOutIsOpen] = useState(false);
    const toogleEatOut = () => setEatOutIsOpen(!eatOutiIsOpen);

    const openCookingCollapse = () => {
        toggleCooking();
        setWhichIsOpen("Cooking");
        // setFoodDeliveryIsOpen(false);
        setEatOutIsOpen(false);
    }

    // const openFoodDeliveryCollapse = () => {
    //     setCookingIsOpen(false);
    //     toggleFoodDelivery();
    //     setWhichIsOpen("Food Delivery");
    //     setEatOutIsOpen(false);
    // }

    const openEatOutCollapse = () => {
        setCookingIsOpen(false);
        // setFoodDeliveryIsOpen(false);
        toogleEatOut();
        setWhichIsOpen("Eat Out");
    }

    const setCloseCollapseSpeed = (id) => {
        if (id.trim() === whichIsOpen.trim()) {
            setcollapseCloseSpeed(1500);
        } else {
            setcollapseCloseSpeed(0);
        }
    }

    return (
        <MDBContainer fluid className="my-5 pb-5 pt-5 text-center justify-content-center content">
            <h1>What To Eat!</h1>
            <MDBContainer fluid>
                <MDBBtn
                    color="dark"
                    onClick={() => { openCookingCollapse(); setCloseCollapseSpeed("Cooking");}}
                    style={{ marginBottom: "1rem", "textTransform": "none" }}
                >
                    Cook? (Save <Emoji symbol="💲💲" />)
                </MDBBtn>
                {/* <MDBBtn
                    color="purple"
                    onClick={() => { openFoodDeliveryCollapse(); setCloseCollapseSpeed("Food Delivery");}}
                    style={{ marginBottom: "1rem", "textTransform": "none" }}
                >
                    Food Delivery? (Spend <Emoji symbol="💲💲" />)
                </MDBBtn> */}
                <MDBBtn
                    size="large"
                    color="blue"
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
                {/* <MDBCollapse id="foodDeliveryCollapse" delay={{hide: collapseCloseSpeed}} isOpen={foodDeliveryIsOpen}>
                    <FoodDeliveryTab />
                </MDBCollapse> */}
            </MDBContainer>
        </MDBContainer>
    );
}

export default WhatToEatPage;