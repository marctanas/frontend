import React from 'react';
import Button from './Button';
import logo from './logo.svg';
//import Jumbotron from './Jumbotron';

const NavBar = () => {

    const promptLogin = () => {
        window.location ="http://www.apple.com"
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
                Bootstrap
            </a>
            <div style={{display: 'flex'}}>
                {/* <Button 
                className="btn-primary">
                    LogIn
                </Button> */}
                <button onClick={promptLogin} className="btn btn-primary">
                        LogIn
                </button>


            </div>
        </nav>
    )
}

export default NavBar;