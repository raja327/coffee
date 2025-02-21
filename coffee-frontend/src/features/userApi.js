import { api } from "./auth/api";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // update profile endpoint
    updateProfile: builder.mutation({
      query: (credentials) => ({
        url: "/users/profileUpdate",
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
          Authorization: `Bearer ${credentials.token}`,
        },
      }),
      invalidatesTags: ["User"],
    }),
  }),
  overrideExisting: false,
});

export const { useUpdateProfileMutation } = userApi;
