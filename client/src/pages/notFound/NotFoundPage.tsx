import React from 'react';
import './NotFoundPage.css'
import {Button, Typography} from "antd";
import { useNavigate } from 'react-router-dom';
import {RouteNames} from "../../routes";

const NotFoundPage = () => {
    const navigate = useNavigate();
    const goToMain = () => navigate(RouteNames.START)
    return (
        <div className='box'>
            
            <h1>
                <Typography.Title type="danger">
                    No Such Page
                </Typography.Title>
            </h1>
            <Button type="primary" onClick={goToMain}>
                
                Go to Main Page
            </Button>
        </div>
    );
};

export default NotFoundPage;
