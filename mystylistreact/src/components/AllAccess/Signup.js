import React from 'react';

const Signup = () => {
    return(
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                        />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="confirmpassword"
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-block">Signup</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;