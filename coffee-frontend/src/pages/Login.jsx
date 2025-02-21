import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLoginMutation } from "../features/auth/authApi";
import { setCredentials } from "../features/auth/authSlice";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export function Login() {
  const dispatch = useDispatch();
  const location = useLocation();

  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"; // Get previous location

  const [login, { isLoading }] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Password is required !"),
      email: Yup.string().required("Email is required !"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await login(values).unwrap();

        dispatch(
          setCredentials({
            user: response?.user,
            role: response?.user?.role,
            token: response?.token,
            isAuthenticated: true, // Ensure this is true after successful login
          })
        );

        toast.success(response?.message || "Login successful");

        // If redirected from another page, go back there after login
        if (from !== "/") {
          navigate(from, { replace: true });
        } else {
          // Otherwise, navigate based on role
          if (response?.user?.role === "admin") {
            navigate("/admin");
          } else if (response?.user?.role === "user") {
            navigate("/dashboard");
          }
        }

        formik.resetForm();
      } catch (error) {
        toast.error(error?.data?.message);
      }
    },
  });
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <Card
        shadow={false}
        className="md:px-16 md:py-8 py-8 border border-gray-300"
      >
        <CardHeader shadow={false} floated={false} className="text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 !text-3xl lg:text-4xl"
          >
            Login
          </Typography>
          <Typography className="!text-gray-600 text-[18px] font-normal md:max-w-sm">
            Enjoy quick and secure access to your accounts
          </Typography>
        </CardHeader>
        <CardBody>
          <form
            action="#"
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 md:mt-12"
          >
            <div>
              <label htmlFor="email">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Your Email
                </Typography>
              </label>
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                id="email"
                color="gray"
                size="lg"
                type="email"
                name="email"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "hidden",
                }}
              />
              {formik.errors.email && formik.touched.email && (
                <p className="text-red-600">{formik.errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="password">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Your Password
                </Typography>
              </label>
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                id="password"
                color="gray"
                size="lg"
                type="password"
                name="password"
                placeholder="Enter your password"
                className="!w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "hidden",
                }}
              />
              {formik.errors.password && formik.touched.password && (
                <p className="text-red-600">{formik.errors.password}</p>
              )}
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              size="lg"
              color="purple"
              fullWidth
            >
              continue
            </Button>
            <Button
              variant="outlined"
              size="lg"
              className="flex h-12 border-blue-gray-200 items-center justify-center gap-2"
              fullWidth
            >
              <img
                src={`https://www.material-tailwind.com/logos/logo-google.png`}
                alt="google"
                className="h-6 w-6"
              />{" "}
              sign in with google
            </Button>

            <Typography
              variant="small"
              className="text-center mx-auto max-w-[19rem] !font-medium !text-gray-600"
            >
              Don&apos;t have account ?{" "}
              <Link to="/register" className="text-purple-900">
                Register Now
              </Link>{" "}
            </Typography>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default Login;
