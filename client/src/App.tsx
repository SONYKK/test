import React from 'react';
import AppRouter from "./components/AppRouter";
import {StoreProvider} from "./redux/state";

function App() {
  return (
        <StoreProvider>
            <AppRouter/>
        </StoreProvider>
  );
}

export default App;
