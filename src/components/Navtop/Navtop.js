import React from 'react'
import { GiBeerStein } from 'react-icons/gi';
import { Link } from "react-router-dom";

function Navtop() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
        <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
            <GiBeerStein /> 
            <div className="ms-1">Пивограммирование</div>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample05">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li> */}
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Хуки</a>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/hooks/useState">useState</Link></li>
                </ul>
            </li>
            </ul>
            <form role="search">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            </form>
        </div>
        </div>
    </nav>
  )
}

export default Navtop