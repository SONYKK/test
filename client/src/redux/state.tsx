import {configureStore, DeepPartial, ReducersMapObject} from '@reduxjs/toolkit'
import testReducer from '../pages/testPage/model/slice/TestPageSlice'
import resultReducer from '../pages/resultPage/model/slice/ResultPageSlice'
import {Provider} from "react-redux";
import {StateSchema} from "./StateSchema";
import {ReactNode} from "react";


export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        test: testReducer,
        result: resultReducer
    };
    
    return configureStore<StateSchema>({
        reducer: rootReducers,
        preloadedState: initialState,
    });
}

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;
    
    const store = createReduxStore(initialState as StateSchema);
    
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
