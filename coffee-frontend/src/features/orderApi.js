import { api } from "./auth/api";

export const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addOrder: builder.mutation({
      query: (orderData) => ({
        url: "/orders",
        method: "POST",
        body: orderData,
      }),
      invalidatesTags: ["Order"],
    }),
    getOrders: builder.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
      providesTags: ["Order"],
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: "admin/orders",
        method: "GET",
      }),
      providesTags: ["Order"],
    }),
  }),
});
export const {
  useAddOrderMutation,
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useGetAllOrdersQuery,
} = orderApi;
