import {createAsyncThunk} from "@reduxjs/toolkit";
import {TestPageSchema} from "../../../../redux/StateSchema";
import axios from "axios";

export interface ThunkConfig<T> {
    rejectValue: T;
}

export const fetchTestCheked = createAsyncThunk<
    TestPageSchema[],
    string,
    ThunkConfig<string>
    >('fetchTests/fetchTestCheked', async (
    id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    
    try {
        const response = await axios.put<TestPageSchema[]>(
            `http://localhost:8000/questions/${id}`, );
        console.log(response);
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
