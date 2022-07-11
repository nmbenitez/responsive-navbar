import React, { useState } from "react";
import { Icon } from 'react-icons-kit';
import {thMenu} from 'react-icons-kit/typicons/thMenu'
import {times} from 'react-icons-kit/typicons/times'

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return(
        <nav className={toggle ? "navbar expanded" : "navbar" }>
            <h2 className="logo">Navbar</h2>
            <ul className="links">
                <li>Home</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

            <div className="toggle-icon" onClick={handleToggle}>
                {toggle ? <Icon icon={times} size={28}></Icon> : <Icon icon={thMenu} size={28}></Icon> }
            </div>
        </nav>
    );
}
export default Navbar;