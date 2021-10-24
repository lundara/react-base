import React from 'react';
import './style.scss';

// LOAD ASSETS
import logo from 'assets/images/logo.png';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    login() {
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div className="content">
                <div className="row login-wrap">
                    <div className="col-md-6 col-sm-12 col-img">
                        <div className="login-img"></div>
                    </div>
                    <div className="col-md-6 col-sm-12" style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <form className="login-form" onSubmit={() => this.login()}>
                            <div className="form-inner">
                                <div className="logo">
                                    <img src={logo} alt="Logo" className="img-fluid logo" width="150" />
                                    <h3 className="logo-text">APP NAME</h3>
                                </div>
                                <div className="form-input">
                                    <input type="text" className="form-control login-input" placeholder="Username" name="username" autoComplete="off" required />
                                    <input type="password" className="form-control login-input mt-4" placeholder="Password" autoComplete="off" required />
                                    <button className="btn btn-primary login-btn btn-block mt-4" type="submit">LOGIN</button>
                                </div>
                                <div className="login-action mt-5">
                                    <a href="#" className="forgot-link">Lupa Password ?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
