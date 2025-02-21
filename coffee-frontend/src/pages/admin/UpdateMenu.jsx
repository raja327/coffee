import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  useGetMenuByIdQuery,
  useUpdateMenuMutation,
} from "../../features/menuApi";
import { toast } from "react-toastify";
import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateMenu = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: menu, isLoading: isMenuLoading } = useGetMenuByIdQuery(id);
  const [updateMenu, { isLoading: isUpdating }] = useUpdateMenuMutation();
  const [imagePreview, setImagePreview] = useState(null);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: menu?.data.name || "",
      price: menu?.data.price || "",
      category: menu?.data.category || "",
      description: menu?.data.description || "",
      image: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Menu name is required"),
      price: Yup.number()
        .typeError("Price must be a number")
        .min(0, "Price cannot be negative")
        .required("Menu price is required"),
      category: Yup.string().required("Menu category is required"),
      description: Yup.string()
        .max(500, "Description should not exceed 500 characters")
        .required("Menu description is required"),
      image: Yup.mixed().notRequired(),
    }),
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("price", values.price);
      formData.append("category", values.category);
      formData.append("description", values.description);

      if (values.image) {
        formData.append("image", values.image);
      }

      try {
        const response = await updateMenu({ id, formData }).unwrap();
        console.log(response);
        toast.success(response?.message || "Menu updated successfully");
        resetForm();
        setImagePreview(null);
        navigate("/admin/menus");
      } catch (error) {
        toast.error(error?.message || "Failed to update menu");
      }
    },
  });

  if (isMenuLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <Card
        shadow={false}
        className="md:px-16 md:py-8 py-8 border border-gray-300"
      >
        <CardHeader shadow={false} floated={false} className="text-center">
          <Typography variant="h1" className="mb-4 text-3xl lg:text-4xl">
            Update Menu Item
          </Typography>
        </CardHeader>
        <CardBody>
          <form
            encType="multipart/form-data"
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 md:mt-6"
          >
            {/* Name */}
            <div>
              <label htmlFor="name">Menu Name</label>
              <Input
                id="name"
                name="name"
                type="text"
                {...formik.getFieldProps("name")}
                placeholder="Enter menu name"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-600">{formik.errors.name}</p>
              )}
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price">Price</label>
              <Input
                id="price"
                name="price"
                type="number"
                {...formik.getFieldProps("price")}
                placeholder="Enter menu price"
              />
              {formik.touched.price && formik.errors.price && (
                <p className="text-red-600">{formik.errors.price}</p>
              )}
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category">Category</label>
              <Input
                id="category"
                name="category"
                type="text"
                {...formik.getFieldProps("category")}
                placeholder="Enter category"
              />
              {formik.touched.category && formik.errors.category && (
                <p className="text-red-600">{formik.errors.category}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                {...formik.getFieldProps("description")}
                placeholder="Enter menu description"
                className="w-full border px-3 py-2 rounded-md"
              ></textarea>
              {formik.touched.description && formik.errors.description && (
                <p className="text-red-600">{formik.errors.description}</p>
              )}
            </div>

            {/* Image Upload */}
            <div>
              <label htmlFor="image">Upload Image (Optional)</label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const file = event.currentTarget.files[0];
                  formik.setFieldValue("image", file);

                  if (imagePreview) {
                    URL.revokeObjectURL(imagePreview);
                  }

                  setImagePreview(file ? URL.createObjectURL(file) : null);
                }}
              />
              {formik.touched.image && formik.errors.image && (
                <p className="text-red-600">{formik.errors.image}</p>
              )}
            </div>

            {/* Image Preview */}
            {imagePreview && (
              <div className="mt-2">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-md"
                />
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isUpdating}
              size="lg"
              color="purple"
              fullWidth
            >
              {isUpdating ? "Updating..." : "Update Menu"}
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default UpdateMenu;
