import React, { useState, useRef, useEffect } from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, 
    MDBNavbarToggler, MDBCollapse, MDBNavItem 
} from 'mdbreact';

import { NavLink }  from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import '../assets/css/navbar.css';

const MyNavbar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapse = () => { setCollapsed(!collapsed); }
    const node = useRef();

    const handleClickOutside = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setCollapsed(false);
    };

    useEffect(() => {
        if (collapsed) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [collapsed]);

    return (
        <div ref={node}>
            <MDBNavbar dark expand="md" >
                <MDBNavbarBrand>
                    <NavLink to='/'>
                    <img src={Logo} style={{
                        height: '1.5rem',
                        width: '1.5rem',
                        marginBottom: '0.5rem',
                        marginRight: '0.5rem',
                    }} alt="Logo" />
                    <strong className="text">zckoh.github.io</strong>
                    </NavLink>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={() => { toggleCollapse() }} />
                <MDBCollapse isOpen={collapsed} navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem className="text-center">
                            <NavLink to={"home"} onClick={() => { setCollapsed(false) }} className="text">
                                <strong>Home</strong>
                            </NavLink>
                        </MDBNavItem>
                        <MDBNavItem className="text-center">
                            <NavLink to={"projects"} onClick={() => { setCollapsed(false) }} className="text">
                                    <strong>Projects</strong>
                            </NavLink>
                        </MDBNavItem>
                        <MDBNavItem className="text-center">
                            <NavLink to={"contact"} onClick={() => { setCollapsed(false) }} className="text">
                                    <strong>Contact</strong>
                            </NavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </div>
    );
}

export default MyNavbar;