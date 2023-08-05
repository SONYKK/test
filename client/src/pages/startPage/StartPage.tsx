import {Button, Typography} from "antd";
import './StartPage.css'
import React from "react";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../routes";

const StartPage = () => {
    const navigate = useNavigate();
    const goToTest = () => navigate(RouteNames.TEST)
    
    return (
        <div className='startPage'>

            <Typography.Title type="warning">
                Push this button and start Test
            </Typography.Title>

            <Button type="primary" onClick={goToTest}>Start Test</Button>
        </div>
    );
};

export default StartPage;
