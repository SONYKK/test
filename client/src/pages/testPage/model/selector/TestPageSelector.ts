import {StateSchema} from "../../../../redux/StateSchema";
import {createSelector} from "@reduxjs/toolkit";

export const getTests = (state: StateSchema) =>
    state.test;
export const getTestTitle = createSelector(getTests,
        tests =>tests.title);
export const getId = createSelector(getTests,
        tests =>tests.id) || 1;
export const getPossibleAnswers = createSelector(getTests,
        tests =>tests.possibleAnswer);
export const getRightAnswer = createSelector(getTests,
        tests =>tests.rightAnswer);
export const getTestsChecked = createSelector(getTests,
        tests =>tests.limit) || 1;
export const getTestsPageHasMore = createSelector(getTests,
        tests =>tests.hasMore);
