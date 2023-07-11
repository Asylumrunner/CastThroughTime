import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const dataApi = createApi({
    reducerPath: 'data',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://7ksu0sxwll.execute-api.us-west-1.amazonaws.com/prod',
        credentials: "same-origin", 
    }),
    endpoints(builder) {
        return {
            fetchCards: builder.query({
                query: () => {
                    return {
                        url: '/cards',
                        method: 'GET'
                    }
                }
            }),
            fetchSets: builder.query({
                query: () => {
                    return {
                        url: '/sets',
                        method: 'GET'
                    }
                }
            })
        }
    }
});

export const { useFetchCardsQuery, useFetchSetsQuery } = dataApi
export { dataApi }