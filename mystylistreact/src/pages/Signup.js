import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';

const Signup = () => {
    return (
        <div class="container">
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
                                <input type="email" id="email" class="form-control form-control-lg" />
                                <label class="form-label" for="email">Email address</label>
                            </div>

                            {/* Password input */}
                            <div class="form-outline mb-4">
                                <input type="password" id="password" class="form-control form-control-lg" />
                                <label class="form-label" for="password">Password</label>
                            </div>
                            
                            {/* Confirm Password */}
                            <div class="form-outline mb-4">
                                <input type="password" id="confirmpassword" class="form-control form-control-lg" />
                                <label class="form-label" for="confirmpassword">Confirm Password</label>
                            </div>

                            <div class="d-flex justify-content-around align-items-center mb-4">
                                {/* Switch Button */}
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                    <label class="form-check-label" for="flexSwitchCheckChecked">Stylist Profile</label>
                                </div>
                                <a href="#">Forgot password?</a>
                            </div>

                            {/* Submit button */}
                            <button type="submit" class="btn btn-primary btn-lg btn-block">Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};
export default Signup;