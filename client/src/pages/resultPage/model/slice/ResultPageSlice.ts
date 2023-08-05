import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ResultPageSchema, StateSchema} from "../../../../redux/StateSchema";
import {fetchTestResult} from "../service/fetchTestResult";


const initialState: ResultPageSchema = {
    id: "1",
    title: "",
    usersAnswer: "",
    rightAnswer: "",
    wasDone: false,
    hasMore: true
}

const ResultPageSlice = createSlice({
    name: 'ResultPageSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // @ts-ignore
        builder
            .addCase(fetchTestResult.fulfilled, (
                    state:StateSchema, action: PayloadAction<ResultPageSchema>) => {
                    state.result = action.payload
                }
            )

    },
})

export default ResultPageSlice.reducer
