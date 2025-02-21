import { api } from "./auth/api";

export const menuApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addMenu: builder.mutation({
      query: (menuData) => ({
        url: "/menus", // Ensure your backend route is correct
        method: "POST",
        body: menuData,
      }),
      invalidatesTags: ["Menu"],
    }),
    getAllMenus: builder.query({
      query: () => ({
        url: "/menus", // Ensure your backend route is correct
        method: "GET",
      }),
      providesTags: ["Menu"],
    }),
    // delete menu
    deleteMenu: builder.mutation({
      query: (menuId) => ({
        url: `/menus/${menuId}`, // Ensure your backend route is correct
        method: "DELETE",
      }),
      invalidatesTags: ["Menu"],
    }),
    // get menu by id
    getMenuById: builder.query({
      query: (menuId) => ({
        url: `/menus/${menuId}`,
        method: "GET",
      }),
      providesTags: ["Menu"],
    }),
    // update menu
    updateMenu: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/menus/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Menu"],
    }),
    //  Add top 15 menus endpoint
    getTopMenus: builder.query({
      query: () => ({
        url: "menus/top-menus", // Backend route for top 15 menus
        method: "GET",
      }),
      providesTags: ["Menu"],
    }),
  }),
});

export const {
  useAddMenuMutation,
  useGetAllMenusQuery,
  useDeleteMenuMutation,
  useUpdateMenuMutation,
  useGetMenuByIdQuery,
  useGetTopMenusQuery,
} = menuApi;
