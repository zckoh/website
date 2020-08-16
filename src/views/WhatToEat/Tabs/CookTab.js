import React, { useState } from "react";
import {
    MDBContainer, MDBBtn,
    // MDBInput, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader
} from "mdbreact";

import DishViewModal from "../../../components/DishViewModal.js";
// import DishDeleteModal from "../../../components/DishDeleteModal.js";
// import DishEditModal from "../../../components/DishEditModal.js";
import RandomDishModal from "../../../components/RandomDishModal.js";


import CookingDishes from "./CookingDishes";

const CookTab = () => {
    // const [addDishesModal, setAddDishesModal] = useState(false);
    // const toggleAddDishesModal = () => { setAddDishesModal(!addDishesModal); }

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

    // const [deleteItemModal, setDeleteItemModal] = useState(false);
    // const toggleDeleteItemModal = () => { setDeleteItemModal(!deleteItemModal); }    

    // const deleteItem = item => {
    //     toggleDeleteItemModal();
    //     setActiveItem(item);
    // };

    // const [editItemModal, setEditItemModal] = useState(false);
    // const toggleEditItemModal = () => { setEditItemModal(!editItemModal); }    

    // const editItem = item => {
    //     toggleEditItemModal();
    //     setActiveItem(item);
    // };

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
                className="list-group-item d-flex justify-content-between align-items-center"
            >
            <span
              title={dish.name}
            >
              {dish.name}
            </span>
            <span>
              <MDBBtn color="info" onClick={ () => {viewItem(dish);} }>View</MDBBtn>
              {/* <MDBBtn color="warning" onClick={ () => {editItem(dish);} }>Edit</MDBBtn>
              <MDBBtn color="danger" onClick={ () => {deleteItem(dish);} }>Delete</MDBBtn> */}
            </span>
          </li>
        ));
    };

    // const handleChange = e => {
    //     let { name, value } = e.target;
    //     setActiveItem({ ...activeItem, [name]: value });
    //     console.log(activeItem);
    // };

    // const onSave = (item, entireList) => {
    //     item.id=entireList[entireList.length-1].id + 1
    //     entireList.push(item);
    //     toggleAddDishesModal();
    // };

    // const onDelete = (item, entireList) => {
    //     let index = entireList.indexOf(item);
    //     entireList.splice(index,1);
    //     toggleDeleteItemModal();
    // }

    // const handleEdit = (item, entireList) => {
    //     let index = entireList.indexOf(item);
    //     entireList[index]=item;
    //     toggleEditItemModal();
    // };

    return (
        <MDBContainer>
            <h3>
                Cook at home!
            </h3>
            <MDBContainer fluid>
                {/* <MDBBtn
                    color="primary"
                    onClick={ () => { toggleAddDishesModal();} }
                    style={{ "textTransform": "none" }}
                >
                    Add a New Dish
                </MDBBtn> */}
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
            {/* <DishDeleteModal
                activeItem={activeItem}
                toggle={toggleDeleteItemModal}
                modal={deleteItemModal}
                onDelete={ () => {onDelete(activeItem, CookingDishes)} }
            />
            <DishEditModal
                activeItem={activeItem}
                toggle={toggleEditItemModal}
                modal={editItemModal}
                onSave={ () => {handleEdit(activeItem, CookingDishes)} }
                onChange={handleChange}
            /> */}
            {/* <MDBModal isOpen={addDishesModal} toggle={ () => { toggleAddDishesModal();} }>
                <MDBModalHeader 
                    toggle={() => { toggleAddDishesModal();} }
                    className='text-center'
                    titleClass='w-100 font-weight-bold'
                >
                    Add a New Dish
                </MDBModalHeader>
                <MDBModalBody>
                    <form className='mx-3 grey-text'>
                        <MDBInput
                            label='Dish Name'
                            name="name"
                            group
                            type='text'
                            onChange={handleChange}
                            validate
                        />
                        <MDBInput
                            type='textarea'
                            name="additional_details"
                            rows='3'
                            label='Additional Details'
                            onChange={handleChange}
                        />
                    </form>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color='secondary' onClick={ () => { toggleAddDishesModal();} }>
                        Close
                    </MDBBtn>
                    <MDBBtn color='primary' onClick={ () => onSave(activeItem, CookingDishes)}>Save</MDBBtn>
                </MDBModalFooter>
            </MDBModal> */}
        </MDBContainer>
    );
}

export default CookTab;
