import React, { useState, useRef, useEffect } from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler,
    MDBCollapse, MDBNavItem, MDBNavLink,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from 'mdbreact';
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
        <div ref={node} >
            <MDBNavbar color="stylish-color-dark" fixed="top" dark expand="md" scrolling>
                <MDBNavbarBrand href="home">
                    <img src={Logo} style={{
                        height: '1.5rem',
                        width: '1.5rem',
                        "marginBottom": '0.5rem',
                        "marginRight": '0.5rem',
                    }} alt="fireSpot" />
                    <strong className="white-text">zckoh.github.io</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={() => { toggleCollapse() }} />
                <MDBCollapse id="navbarCollapse" isOpen={collapsed} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <MDBNavLink to={"home"}>
                                <div onClick={() => { setCollapsed(false) }}>
                                    <strong>Home</strong>
                                </div>
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to={"projects"}>
                                <div onClick={() => { setCollapsed(false) }}>
                                    <strong>Projects</strong>
                                </div>
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown className="mydropdown">
                                <MDBDropdownToggle nav caret>
                                    <span className="mr-2"><strong>Apps</strong></span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="mydropdown">
                                    <MDBDropdownItem className="mydropdownitems" href="what-to-eat"><strong>What To Eat!</strong></MDBDropdownItem>
                                    <MDBDropdownItem disabled className="mydropdownitems" href="#">More coming soon!</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </div>
    );
}

export default MyNavbar;