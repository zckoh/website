import React from "react";
import {
    MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader
} from "mdbreact";

const DishEditModal = (props) => {
    // Create onClick function for delete
    // must include props.toggle to close the modal
    return (
        <MDBModal isOpen={props.modal} toggle={props.toggle}>
            <MDBModalHeader 
                toggle={props.toggle}
                className='text-center'
                titleClass='w-100 font-weight-bold'
            >
                Edit Dish: { props.activeItem.name }
            </MDBModalHeader>
            <MDBModalBody>
            <form className='mx-3 grey-text'>
                <MDBInput
                    label='Dish Name'
                    name="name"
                    group
                    type='text'
                    onChange={props.onChange}
                    valueDefault={props.activeItem.name}
                    validate
                />
                <MDBInput
                    type='textarea'
                    name="additional_details"
                    rows='3'
                    label='Additional Details'
                    valueDefault={props.activeItem.additional_details}
                    onChange={props.onChange}
                />
            </form>
            </MDBModalBody>
            <MDBModalFooter>
            <MDBBtn color="secondary" onClick={props.toggle}>
                Close
            </MDBBtn>
            <MDBBtn color="primary" onClick={props.onSave}>
                Update
            </MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    );
}


export default DishEditModal;