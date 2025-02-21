import { useFormik } from "formik";
import { useAllSearchQuery } from "../features/searchApi";
import * as Yup from "yup";

const AllSearch = () => {
  // Use Formik for form handling
  const { values, handleChange, handleBlur, handleSubmit, touched, errors } =
    useFormik({
      initialValues: { query: "" },
      validationSchema: Yup.object({
        query: Yup.string().min(2, "Minimum 2 characters required"),
      }),
      onSubmit: (values) => {
        // You can perform additional actions when the form is submitted
        console.log("Submitted query:", values.query); // Log the submitted query
      },
    });

  // Fetch data based on the query using the useAllSearchQuery hook
  const { data, isLoading, error } = useAllSearchQuery(values.query, {
    skip: values.query.length < 2, // Prevent unnecessary API calls if the query length is less than 2
  });

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
        <input
          type="text"
          name="query"
          placeholder="Search for menus or services..."
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.query}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Search
        </button>
      </form>

      {touched.query && errors.query && (
        <p className="text-red-500 text-sm">{errors.query}</p>
      )}

      {/* Loading State */}
      {isLoading && <p className="text-gray-500">Searching...</p>}

      {/* Error Handling */}
      {error && (
        <p className="text-red-500">
          Error fetching results: {error.message || "Unknown error"}
        </p>
      )}

      {/* Search Results */}
      {data && (
        <div className="mt-4">
          {/* Menu Results */}
          <h2 className="text-lg font-semibold text-gray-700">Menu Items</h2>
          {data.menu?.length > 0 ? (
            <ul className="list-disc pl-5">
              {data.menu.map((item) => (
                <li key={item._id} className="border p-2 my-2 rounded-md">
                  <strong>{item.name}</strong> - ${item.price}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No menu items found.</p>
          )}

          {/* Service Results */}
          <h2 className="text-lg font-semibold text-gray-700 mt-4">Services</h2>
          {data.services?.length > 0 ? (
            <ul className="list-disc pl-5">
              {data.services.map((service) => (
                <li key={service._id} className="border p-2 my-2 rounded-md">
                  <strong>{service.name}</strong> - ${service.price}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No services found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AllSearch;
