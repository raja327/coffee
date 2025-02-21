import { useAddServiceMutation } from "../../features/serviceApi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Button } from "@material-tailwind/react";

const AddService = () => {
  const [addService] = useAddServiceMutation();

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Service name is required"),
    image: Yup.string().required("Image URL is required"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <div className="p-4">
      <div className="md:px-16 md:py-8 py-8 border border-gray-300">
        <h2 className="text-2xl font-bold mb-4">Add Service</h2>
        <Formik
          initialValues={{ name: "", image: "", description: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              await addService(values).unwrap();
              toast.success("Service added successfully!");
              resetForm();
            } catch (error) {
              toast.error(error?.data?.message || "Failed to add service");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label className="block font-medium">Service Name</label>
                <Field
                  type="text"
                  name="name"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label className="block font-medium">Image URL</label>
                <Field
                  type="text"
                  name="image"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage
                  name="image"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label className="block font-medium">Description</label>
                <Field
                  as="textarea"
                  name="description"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <Button
                variant="filled"
                size="lg"
                color="blue"
                type="submit"
                fullWidth
                disabled={isSubmitting}
              >
                {isSubmitting ? "Adding..." : "Add Service"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddService;
