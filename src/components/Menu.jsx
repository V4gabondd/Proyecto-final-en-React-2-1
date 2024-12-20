import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css";


function Menu() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/characters">Personajes</Link></li>
                <li><Link to="/Formulario">Formulario</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;
