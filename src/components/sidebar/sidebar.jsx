import React from 'react';
import './style.scss';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="sidebar-wrapper">
                <div className="sidebar-heading">
                    APP NAME
                </div>
                <div className="list-group list-group-flush">
                    <a className="list-group-item list-group-item-action" >
                        <i className="fas fa-tachometer-alt" style={{ marginRight: 5 }}></i>
                        <span>Dashboard</span>
                    </a>
                    <div>
                        <a href="javascript:(0)" className="list-group-item list-group-item-action" >
                            <i className="fas fa-database" style={{ marginRight: 5 }}></i>
                            <span>Master Data</span>
                            <i className="fas fa-angle-right dropdown-icon" style={{ float: 'right' }}></i>
                        </a>
                        <div className="menu-item" >
                            <a href="#" className="list-group-item list-group-item-action">Sub Menu</a>
                        </div>
                    </div>
                    <div>
                        <a href="javascript:(0)" className="list-group-item list-group-item-action" >
                            <i className="fas fa-file-alt" style={{ marginRight: 5 }}></i>
                            <span>Report</span>
                            <i className="fas fa-angle-right dropdown-icon" style={{ float: 'right' }}></i>
                        </a>
                        <div className="menu-item" >
                            <a href="#" className="list-group-item list-group-item-action">Transaction</a>
                        </div>
                    </div>
                    <a className="list-group-item list-group-item-action " >
                        <i className="fas fa-info-circle" style={{ marginRight: 5 }}></i>
                        <span>About</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Sidebar;
