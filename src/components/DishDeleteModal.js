import React from "react";
import {
    MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader
} from "mdbreact";

const DishDeleteModal = (props) => {
    // Create onClick function for delete
    // must include props.toggle to close the modal
    return (
        <MDBModal isOpen={props.modal} toggle={props.toggle}>
            <MDBModalHeader 
                toggle={props.toggle}
                className='text-center'
                titleClass='w-100 font-weight-bold'
            >
                Delete Dish: { props.activeItem.name }
            </MDBModalHeader>
            <MDBModalBody>
                <h3>
                    Are you sure you want to delete the following dish?
                </h3>
                <p>
                Date Added: { props.activeItem.date_added }<br/>
                Additional Details:<br/>
                { props.activeItem.additional_details }
                </p>
            </MDBModalBody>
            <MDBModalFooter>
            <MDBBtn color="primary" onClick={props.toggle}>
                Back
            </MDBBtn>
            <MDBBtn color="danger" onClick={props.onDelete}>
                Delete
            </MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    );
}


export default DishDeleteModal;