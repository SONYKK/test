import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {StateSchema, TestPageSchema} from "../../../../redux/StateSchema";
import {fetchTestsList} from "../service/fetchTests";
import {fetchTestCheked} from "../service/fetchTestCheked";

const initialState: TestPageSchema = {
    id: '1',
    title: '',
    rightAnswer: '',
    possibleAnswer: [''],
    checked: '',
    limit: 1,
    hasMore: true,
}

const TestPageSlice = createSlice({
    name: 'TestPageSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // @ts-ignore
        builder
            .addCase(fetchTestsList.fulfilled, (
                state:StateSchema, action: PayloadAction<TestPageSchema>) => {
                state.test = action.payload
                }
            )
            .addCase(fetchTestCheked.fulfilled, (
                        state:StateSchema, action: PayloadAction<TestPageSchema>) => {
                        state.test.checked = action.payload.checked
                    }
                )
    },
})

export default TestPageSlice.reducer
