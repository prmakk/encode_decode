import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
    const [isMenuActive, setIsMenuActive] = useState(true);

    const handleBurgerMenu = () => {
        setIsMenuActive(!isMenuActive);
        console.log("Menu" + isMenuActive);
    };
    return (
        <aside className={isMenuActive ? "sidebar" : "sidebar _active"}>
            <div className="sidebar__burger" onClick={handleBurgerMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className="sidebar__nav">
                <NavLink to="/">Home</NavLink>
                <p>Text transform</p>
                <NavLink to="/base64/encode">Base64 Encode</NavLink>
                <NavLink to="/base64/decode">Base64 Decode</NavLink>
                <NavLink to="/reverseall">Reverse string</NavLink>
                <NavLink to="/lower">To Lower case</NavLink>
                <NavLink to="/upper">To Upper case</NavLink>
                <NavLink to="/caesar/encode">Caesar Encode</NavLink>
                <NavLink to="/caesar/decode">Caesar Decode</NavLink>
                <NavLink to="/binary/encode">Binary Encode</NavLink>
                <NavLink to="/binary/decode">Binary Decode</NavLink>
                <p>Images</p>
                <NavLink to="/image/edit">Edit image</NavLink>
                <NavLink to="/generateqr">Generate QR</NavLink>
            </nav>
        </aside>
    );
};

export default SideMenu;
