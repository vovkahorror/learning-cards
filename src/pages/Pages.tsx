import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Profile} from "features/Profile/Profile";
import {PATH} from "pages/path";
import {Login} from "features/auth/Login/Login";
import {Registration} from "features/auth/Registration/Registration";
import {Recovery} from "features/auth/Recovery/Recovery";
import {NotFound} from "features/NotFound/NotFound";
import {ViewComponents} from "features/ViewComponents/ViewComponents";
import {Navigate} from "react-router-dom";
import {NewPassword} from "features/auth/NewPassword/NewPassword";

export const Pages = () => {
    return (
        <Routes>
            <Route path={PATH.PROFILE} element={<Profile/>}/>
            <Route path={PATH.LOGIN} element={<Login/>}/>
            <Route path={PATH.REGISTRATION} element={<Registration/>}/>
            <Route path={PATH.RECOVERY} element={<Recovery/>}/>
            <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>

            <Route path={PATH.VIEW_COMPONENTS} element={<ViewComponents/>}/>
            <Route path={PATH.NOT_FOUND} element={<NotFound/>}/>
            <Route path={'*'} element={<Navigate to={PATH.NOT_FOUND}/>}/>
        </Routes>
    )
}
