import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const GlobalNavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-primary">
                <a class="navbar-brand" href="/">MyStylist</a>
                <div className="navbar-nav">
                    <li className="nav-item">
                        <a class="nav-link" aria-current="page" href="/home">Home</a>
                    </li>
                </div>

                <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a class="nav-link" aria-current="page" href="/login">Login</a>
                    </li>

                    <li className="nav-item">
                        <a class="nav-link" aria-current="page" href="/signup">Signup</a>
                    </li>
                </div>
            </nav>
        </div>
    );
};

export default GlobalNavBar;