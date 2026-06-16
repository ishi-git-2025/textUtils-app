import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// This is a functional component that represents a navigation bar. 
// It takes in props 'title' and 'about' to display the brand name and about link respectively.

export default function Navbar({ title, about, mode, toggleMode, toggleColor }) {
    return (
        <nav className={`navbar navbar-expand-lg ${mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{about}</Link>
                        </li>
                    </ul>
                    <div className={`d-flex align-items-center me-3 ${mode === 'dark' ? 'text-white' : 'text-dark'}`}>
                        Custom colors:
                        <button className="btn btn-primary mx-1" onClick={() => toggleColor('primary')}></button>
                        <button className="btn btn-danger mx-1" onClick={() => toggleColor('danger')}></button>
                        <button className="btn btn-success mx-1" onClick={() => toggleColor('success')}></button>
                        <button className="btn btn-warning mx-1" onClick={() => toggleColor('warning')}></button>
                    </div>
                    <div className="form-check form-switch" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                        <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"
                            onClick={toggleMode} />
                        <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'Set Title Here',
    about: 'About'
};
