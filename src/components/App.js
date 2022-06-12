import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {AuthProvider} from '../contexts/AuthContext';
import Dashboard from './google-drive/Dashboard';
import ForgotPassword from './auth/ForgotPassword';
import Login from './auth/Login';
import PrivateRoute from './auth/PrivateRoute';
import Profile from './auth/Profile';
import React from 'react';
import Signup from './auth/Signup';
import UpdateProfile from './auth/UpdateProfile';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    {/* Drive */}
                    <PrivateRoute exact path='/' component={Dashboard}/>
                    <PrivateRoute exact path='/folder/:folderId' component={Dashboard}/>

                    {/* Profile */}
                    <PrivateRoute path='/user' component={Profile}/>
                    <PrivateRoute path='/update-profile' component={UpdateProfile}/>

                    {/* Auth */}
                    <Route path='/signup' component={Signup}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/forgot-password' component={ForgotPassword}/>
                </Switch>
            </AuthProvider>
        </Router>
    );
}

export default App;
