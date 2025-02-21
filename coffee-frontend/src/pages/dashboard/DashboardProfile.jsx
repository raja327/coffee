import { useSelector, useDispatch } from "react-redux";
import { useUpdateProfileMutation } from "../../features/userApi";
import { updateProfile } from "../../features/auth/authSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const DashboardProfile = () => {
  const dispatch = useDispatch();

  // Fetch user data from Redux store
  const { user } = useSelector((state) => state.auth);
  // console.log(user, token);

  // Mutation hook for updating the profile
  const [updateProfileApi, { isLoading }] = useUpdateProfileMutation();

  // Formik for form handling
  const formik = useFormik({
    initialValues: {
      name: user?.name || "",
      email: user?.email || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await updateProfileApi(values).unwrap();

        // Update Redux state with new user info
        dispatch(
          updateProfile({
            user: response.user,
          })
        );
        toast.success(response.message || "Profile updated successfully!");
      } catch (err) {
        toast.error(err?.data?.message || "Failed to update profile");
      }
    },
  });

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Update Profile</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-600">{formik.errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-600">{formik.errors.email}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
        >
          {isLoading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default DashboardProfile;
