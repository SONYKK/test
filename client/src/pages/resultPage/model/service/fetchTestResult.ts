import {createAsyncThunk} from "@reduxjs/toolkit";
import {ResultPageSchema} from "../../../../redux/StateSchema";
import axios from "axios";

export interface ThunkConfig<T> {
    rejectValue: T;
}

export const fetchTestResult = createAsyncThunk<
    ResultPageSchema[],
    string,
    ThunkConfig<string>
    >('fetchTests/fetchTestResult', async (
    _, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    
    try {
        const response = await axios.get<ResultPageSchema[]>(
            `http://localhost:8000/answers`, );
        console.log(response);
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
