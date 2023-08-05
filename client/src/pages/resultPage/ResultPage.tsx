import './ResultPage.css'
import {AppDispatch} from "../../redux/state";
import {useDispatch, useSelector} from "react-redux";
import {Button, Typography} from "antd";
import React from "react";
import {fetchTestResult} from "./model/service/fetchTestResult";
import {getResult} from "./model/selector/ResultPageSelectors";

const ResultPage = () => {
    const dispatch : AppDispatch = useDispatch();
    const answers = useSelector(getResult)
    
    let checked = false
    function showResult() {
        !checked;
        dispatch(fetchTestResult(''))
    }
    
    return (
        <div className='resultPage'>
            {!checked ? <>
                    <Typography.Title type="warning">
                        Push this button and see Result
                    </Typography.Title>
        
                    <Button type="primary" onClick={showResult}>Start Test</Button>
                </> : <>
                    <Typography.Title type="warning">
                        {answers.title}
                    </Typography.Title>
                <Typography.Text type='success'>
                    {answers.rightAnswer}
                </Typography.Text>
                <Typography.Text type='secondary'>
                    {answers.usersAnswer}
                </Typography.Text>
                </>
            }
        </div>
    );
};

export default ResultPage;
