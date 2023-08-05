import React from 'react';
import {Route, Routes} from "react-router";
import { routes } from "../routes";


const AppRouter = () => {
    
    return (
        <>
            <Routes>
                {routes.map(({path, component: Component}) => (
                    <Route path={path}
                           element={<Component/>}
                           key={path}/>))}
            </Routes>
        </>
    );
};

export default AppRouter;
