import React from 'react';
import logo from '../../images/doppler-logo.svg';
import '../../styles/header.css';


function Header() {
    return (
        <header className="header-main dp-header--cm">
            <div className="header-container">
                <img src={logo}></img>
                <h3 className="title">Users reactApp</h3>
            </div>
            <div className="header-wrapper">
                <nav className="nav-left-main">
                    <div className="menu-main--container">
                        <ul className="menu-main">
                            <li><a href="/users/new">Alta de Usuarios</a></li>
                            <li><a href="#">Modificación</a></li>
                            <li><a href="/users">Listado</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;