
import { Route, Switch } from 'react-router-dom';

// PAGES
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
        </>
    )
}

export default Routes
