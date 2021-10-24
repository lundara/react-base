import React from 'react';
import Layout from 'components/layout/layout';
import './style.scss';
import service from './service';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true
        }
    }

    componentDidMount() {

        // CALL FUNCTION FOR GET DATA
        this.getUsers();
    }

    // ============================
    // GET USERS
    // ============================
    getUsers() {
        service.getUsers().then(result => {
            // SUCCESS CONDITION

            setTimeout(() => {
                this.setState({ users: result, loading: false }); // INSERT GET RESULT TO STATE & STOP THE LOADING
            }, 3000)
        }).catch(error => {
            // ERROR CONDITION

            this.setState({ loading: false }); // STOP THE LOADING
            alert("Get Users Failed")
        })
    }

    render() {
        return (
            <Layout>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <h2 className="content-header-title float-left pr-1 mb-0">Dashboard</h2>
                    </div>
                    <div className="col-md-12 pt-5">
                        <table border="1">
                            <thead className="table">
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>

                                {/* LOADING CONDITION. IF LOADING STATE TRUE, THIS <TR> WILL BE SHOW */}
                                {this.state.loading ?
                                    <tr>
                                        <td colspan="4" align="center">Loading ....</td>
                                    </tr> : null
                                }

                                {/* LOOPING USERS DATA - START */}
                                {this.state.users.map((data, index) => (
                                    <tr>
                                        <td>{(index + 1)}</td>
                                        <td>{data.name}</td>
                                        <td>{data.username}</td>
                                        <td>{data.email}</td>
                                    </tr>
                                ))}
                                {/* LOOPING USERS DATA - END */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Dashboard;
