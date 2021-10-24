import React from 'react';
import { Avatar } from 'primereact/avatar';
import './style.scss';
import { withRouter } from 'react-router';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            overlayProfile: false
        }
    }

    componentDidMount() {
        console.log(this.props)

    }

    toggleOverlayProfile() {
        this.setState({ overlayProfile: !this.state.overlayProfile });
    }

    logout() {
        this.props.history.push('/login');
    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light">
                <a href="javascript:(0)" class="btn-toggle-sidebar">
                    <i class="fas fa-bars fa-lg" style={{ color: '#9a9a9a' }}></i>
                </a>
                <ul class="navbar-nav ml-auto mt-lg-0">
                    <li class="nav-item">
                        <a href="javascript:(0)" style={{ textDecoration: 'none' }} class="mr-4 button-notif">
                            <i class="fas fa-bell fa-lg" style={{ color: '#9a9a9a' }}></i>
                        </a>
                        <a href="javascript:(0)" style={{ textDecoration: 'none' }} onClick={() => this.toggleOverlayProfile()}>
                            <Avatar label="L" shape="circle" className="avatar-init" />
                        </a >
                    </li >
                </ul>
                {this.state.overlayProfile ?
                    <div class="wrap-profile">
                        <a href="javascript:(0)" class="profile-menu">Profile</a>
                        <a href="javascript:(0)" class="profile-menu" onClick={() => this.logout()}>Logout</a>
                    </div> : null
                }
            </nav >
        );
    }
}

export default withRouter(Navbar);
