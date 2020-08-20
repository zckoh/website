import React from "react";
import {
    MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBInput
} from "mdbreact";

const DishViewModal = (props) => {
    return (
        <MDBModal isOpen={props.modal} toggle={props.toggle}>
            <MDBModalHeader 
                toggle={props.toggle}
                className='text-center'
                titleClass='w-100 font-weight-bold'
            >
                { props.activeItem.name }
            </MDBModalHeader>
            <MDBModalBody>
            <form className='mx-3 text'>
                <MDBInput
                    className="text"
                    disabled
                    label='Dish Name'
                    name="name"
                    group
                    type='text'
                    onChange={props.onChange}
                    valueDefault={props.activeItem.name}
                    validate
                />
                <MDBInput
                    className="text"
                    disabled
                    type='textarea'
                    name="additional_details"
                    rows='9'
                    label='Additional Details'
                    valueDefault={props.activeItem.additional_details}
                    onChange={props.onChange}
                />
            </form>
            </MDBModalBody>
            <MDBModalFooter>
            <MDBBtn color='default' onClick={props.toggle}>
                Close
            </MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    );
}


export default DishViewModal;