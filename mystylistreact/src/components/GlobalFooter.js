import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';

const GlobalFooter = () => {
    return (
        // <div>
            
            
        //         <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        //             <p class="nav-link px-2 text-muted">© 2021 MyStylist, Inc</p>
        //             <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        //                 <p>MyStylist</p>
        //             </a>
        //             <ul class="nav col-md-4 justify-content-end">
        //                 <li class="nav-item"><a href="http://localhost:3000/" class="nav-link px-2 text-muted">Home</a></li>
        //                 <li class="nav-item"><a href="http://localhost:3000/signup" class="nav-link px-2 text-muted">Signup</a></li>
        //                 <li class="nav-item"><a href="http://localhost:3000/login" class="nav-link px-2 text-muted">Login</a></li>
        //                 <li class="nav-item"><a href="http://localhost:3000/profile" class="nav-link px-2 text-muted">Profile</a></li>
        //                 <li class="nav-item"><a href="http://localhost:3000/about" class="nav-link px-2 text-muted">About</a></li>
        //             </ul>
        //         </footer>
            
        // </div>


        // <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p class="nav-link px-2 text-muted">© 2021 MyStylist, Inc</p>

                <a href="http://localhost:3000/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <p>MyStylist</p>
                </a>

                <ul class="nav col-md-4 justify-content-end">
                    <li class="nav-item"><a href="http://localhost:3000/home" class="nav-link px-2 text-muted">Home</a></li>
                    <li class="nav-item"><a href="http://localhost:3000/signup" class="nav-link px-2 text-muted">Signup</a></li>
                    <li class="nav-item"><a href="http://localhost:3000/login" class="nav-link px-2 text-muted">Login</a></li>
                    <li class="nav-item"><a href="http://localhost:3000/profile" class="nav-link px-2 text-muted">Profile</a></li>
                    <li class="nav-item"><a href="http://localhost:3000/about" class="nav-link px-2 text-muted">About</a></li>
                </ul>
            </footer>
        // </div>
    );
};
export default GlobalFooter;