import React from 'react';
import Navbar from 'components/navbar/navbar';
import Sidebar from 'components/sidebar/sidebar';
import './style.scss';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="d-flex" >
                <Sidebar {...this.props} />
                <div className="page-content-wrapper">
                    <Navbar history={this.props.history} />
                    <div className="container-fluid" style={{ paddingRight: 0, paddingLeft: 0 }}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;
