import './TestPage.css'
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../routes";
import {Button, Layout, Typography, Checkbox} from "antd";
import React, {memo, useCallback} from "react";
import {Content, Header} from "antd/es/layout/layout";
import Timer from "../../components/timer/Timer";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import {AppDispatch} from "../../redux/state";
import {useDispatch, useSelector} from "react-redux";
import {fetchTestsList} from "./model/service/fetchTests";
import {
    getId,
    getPossibleAnswers,
    getRightAnswer,
    getTestsPageHasMore, getTestTitle
} from "./model/selector/TestPageSelector";
import {fetchTestCheked} from "./model/service/fetchTestCheked";

const { Title, Text } = Typography;

const TestPage = () => {

    const id = useSelector(getId)
    const possibleAnswer = useSelector(getPossibleAnswers)
    const rightAnswer = useSelector(getRightAnswer)
    const title = useSelector(getTestTitle)
    const hasMore = useSelector(getTestsPageHasMore);
    
    const navigate = useNavigate();
    const dispatch : AppDispatch = useDispatch();
    const goToRes = () => navigate(RouteNames.RESULT)
    
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };
    
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchTestCheked(String(id)));
        if (hasMore) {
            dispatch(fetchTestsList(String(id+1)));
        } else {
            goToRes()
        }
    }, [dispatch, hasMore, id]);

    return (
        <Layout>
            <Header>
                <Button danger onClick={goToRes}>Finish Test</Button>
                <Timer/>
            </Header>
            <Content className='testPage'>
                <Title>{title}</Title>
                <Checkbox onChange={onChange}><Text>
                    {rightAnswer}
                </Text></Checkbox>
                
                {possibleAnswer.map((answer)=>(
                    <Checkbox onChange={onChange}><Text>
                        {answer}
                    </Text></Checkbox>
                ))}
                
                <Button type="primary" onClick={onLoadNextPart}>Next</Button>
                
            </Content>
        </Layout>
    )};

export default memo(TestPage);
