import React from "react";
import ResultPage from "../pages/resultPage/ResultPage";
import TestPage from "../pages/testPage/TestPage";
import StartPage from "../pages/startPage/StartPage";
import NotFoundPage from "../pages/notFound/NotFoundPage";

export interface Route {
    path: string;
    component: React.ComponentType;
}

export enum RouteNames {
    START = '/',
    TEST = '/test',
    RESULT = '/result',
    NOT_FOUND = '*'

}

export const routes: Route[] = [
    {path: RouteNames.START, component: StartPage},
    {path: RouteNames.RESULT, component: ResultPage},
    {path: RouteNames.TEST, component: TestPage},
    {path: RouteNames.NOT_FOUND, component: NotFoundPage}
]

