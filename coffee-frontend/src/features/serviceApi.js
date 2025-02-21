import { api } from "./auth/api";

export const serviceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Add a new service
    addService: builder.mutation({
      query: (serviceData) => ({
        url: "/services",
        method: "POST",
        body: serviceData,
      }),
      invalidatesTags: ["Service"], // Invalidate cache for service list updates
    }),

    // Get all services
    getAllServices: builder.query({
      query: () => ({
        url: "/services",
        method: "GET",
      }),
      providesTags: ["Service"], // Provide cache for service list updates
    }),
    // Get top 4 services
    getTopServices: builder.query({
      query: () => ({
        url: "/top-services",
        method: "GET",
      }),
      providesTags: ["Service"], // Provide cache for service list updates
    }),
  }),
});

export const {
  useAddServiceMutation,
  useGetTopServicesQuery,
  useGetAllServicesQuery,
} = serviceApi;
