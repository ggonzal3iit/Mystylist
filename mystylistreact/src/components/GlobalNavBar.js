import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';


const GlobalNavBar = () => {
    return (
        // <div class="container">
        <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="http://localhost:3000/">MyStylist</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:3000/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://localhost:3000/signup">Signup</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://localhost:3000/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://localhost:3000/about">About</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
//   </div>
    );
};
export default GlobalNavBar;