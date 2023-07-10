import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { currentSetReducer, changeLastPlayedSet } from './slices/currentSetSlice';
import { dataApi } from './apis/dataApi';

export const store = configureStore({
    reducer: {
        currentSet: currentSetReducer,
        [dataApi.reducerPath]: dataApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(dataApi.middleware)
    }
});

setupListeners(store.dispatch);

export { changeLastPlayedSet }
export { useFetchCardsQuery, useFetchSetsQuery } from './apis/dataApi'