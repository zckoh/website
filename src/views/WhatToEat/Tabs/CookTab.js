import React, { useState } from "react";
import {
    MDBContainer, MDBBtn,
} from "mdbreact";
import "../../../assets/css/whattoeat.css";

import DishViewModal from "../../../components/DishViewModal.js";
import RandomDishModal from "../../../components/RandomDishModal.js";
import CookingDishes from "./CookingDishes";

const CookTab = () => {
    const [activeItem, setActiveItem] = useState(
        {
            id: "",
            name: "",
            additional_details: "",
            date_added: ""
        }
    );

    const [viewItemModal, setViewItemModal] = useState(false);
    const toggleViewItemModal = () => { setViewItemModal(!viewItemModal); }    

    const viewItem = item => {
        toggleViewItemModal();
        setActiveItem(item);
    };

    const [randomItemModal, setRandomItemModal] = useState(false);
    const toggleRandomItemModal = () => { setRandomItemModal(!randomItemModal); }    

    const handleRandomClick = () => {
        let randomItem = CookingDishes[Math.floor(Math.random() * CookingDishes.length)];
        setActiveItem(randomItem);
    }

    const viewRandomItem = () => {
        handleRandomClick();
        toggleRandomItemModal();
    }

    const DisplayDishes = dishes => {    
        return dishes.map(dish => (
            <li
                key={dish.id}
                className="list-group-item d-flex justify-content-between align-items-center dish-list "
            >
            <span
              title={dish.name}
            >
              {dish.name}
            </span>
            <span>
              <MDBBtn color="info" onClick={ () => {viewItem(dish);} }>View</MDBBtn>
            </span>
          </li>
        ));
    };

    return (
        <MDBContainer className="pt-3">
            <h3>
                Cook at home!
            </h3>
            <MDBContainer fluid className="pb-3">
                <MDBBtn
                    color="green" 
                    style={{ "textTransform": "none" }}
                    onClick={ () => { viewRandomItem(); }}
                >
                    Randomly Choose a Dish
                </MDBBtn>
            </MDBContainer>
            {DisplayDishes(CookingDishes)}
            <RandomDishModal
                activeItem={activeItem}
                toggle={toggleRandomItemModal}
                modal={randomItemModal}
                onRandomClick={ () => { handleRandomClick() } }            
            />
            <DishViewModal
                activeItem={activeItem}
                toggle={toggleViewItemModal}
                modal={viewItemModal}
            />
        </MDBContainer>
    );
}

export default CookTab;
