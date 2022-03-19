import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';

const Login = () => {
    return (
        // <div class="container">
        <section class="vh-100">
            <div class="container py-5 h-100">
                <div class="row d-flex align-items-center justify-content-center h-100">
                    <div class="col-md-8 col-lg-7 col-xl-6">
                        <img src="https://cdn.pixabay.com/photo/2018/03/24/14/31/hair-stylist-3256774_960_720.jpg" class="img-fluid" alt="Phone" />
                    </div>
                    <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form>
                            {/* Email input */}
                            <div class="form-outline mb-4">
                                <input type="email" id="form1Example13" class="form-control form-control-lg" />
                                <label class="form-label" for="form1Example13">Email address</label>
                            </div>

                            {/* Password input */}
                            <div class="form-outline mb-4">
                                <input type="password" id="form1Example23" class="form-control form-control-lg" />
                                <label class="form-label" for="form1Example23">Password</label>
                            </div>

                            <div class="d-flex justify-content-around align-items-center mb-4">
                                {/* Checkbox */}
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="form1Example3"
                                        checked
                                    />
                                    <label class="form-check-label" for="form1Example3"> Remember me </label>
                                </div>
                                <a href="#!">Forgot password?</a>
                            </div>

                            {/* Submit button */}
                            <button type="submit" class="btn btn-primary btn-lg btn-block">Login</button>

                            <div class="divider d-flex align-items-center my-4">
                                <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                            </div>

                            <a class="btn btn-primary btn-lg btn-block" href="http://localhost:3000/signup" role="button">Signup</a>

                        </form>
                    </div>
                </div>
            </div>
        </section>
        // </div>
    );
};
export default Login;