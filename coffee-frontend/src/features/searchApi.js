import { api } from "./auth/api";

export const searchApi = api.injectEndpoints({
  endpoints: (builder) => ({
    allSearch: builder.query({
      query: (query) => ({
        url: `/search?q=${query}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAllSearchQuery } = searchApi;
