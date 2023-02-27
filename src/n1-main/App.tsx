import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './m1-ui/header/Header';
import Error404 from './m1-ui/common/c0-Error404/Error404';
import Login from '../n2-features/f1-auth/a1-login/Login';
import Register from '../n2-features/f1-auth/a2-register/Register';
import Profile from '../n2-features/f1-auth/a3-profile/Profile';
import ForgotPassword from '../n2-features/f1-auth/a4-forgot-password/ForgotPassword';
import CreateNewPassword from '../n2-features/f1-auth/a5-create-new-password/CreateNewPassword';
import TestPage from '../n2-features/f0-test/t1-test-page/TestPage';
import {ROUTES} from './m1-ui/routes/routes';

function App() {
    return (
        <div className='App'>
            <Header/>
            <Routes>
                <Route path={ROUTES.LOGIN} element={<Login/>}/>
                <Route path={ROUTES.REGISTER} element={<Register/>}/>
                <Route path={ROUTES.PROFILE} element={<Profile/>}/>
                <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword/>}/>
                <Route path={ROUTES.CREATE_NEW_PASSWORD} element={<CreateNewPassword/>}/>
                <Route path={ROUTES.ERROR_404} element={<Error404/>}/>
                <Route path={ROUTES.TEST} element={<TestPage/>}/>
                <Route path={'/'} element={<Navigate to={'/login'}/>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>
        </div>
    );
}

export default App;
