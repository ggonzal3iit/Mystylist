import React from 'react';

const Login = () => {
    
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
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-block">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;