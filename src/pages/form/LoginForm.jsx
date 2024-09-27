import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../auth/authAction"; // Adjusted path
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Logo1 from "../../assets/img/LogoCP1.png";

export default function LoginForm() {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("username is required"),
    email: Yup.string().email("email is invalid").required("email is required"),
    password: Yup.string()
      .matches(
        regex,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one specail case charecter"
      )
      .required("password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  //handle Register
  const handleRegister = async (values) => {
    const registerData = await register(values);
    registerData?.status
      ? toast.error(registerData.message)
      : toast.success(registerData.message);

    console.log("RegisterData", registerData);
  };

  return (
    <>
      <section className="flex justify-center h-full my-0 py-0">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            handleRegister(values);
            resetForm();
          }}
        >
          <Form className="w-1/2 py-10 h-screen rounded-md">
            <h3 className="text-semiBlue-600 text-center py-3 font-semibold text-header-3">
              Log in
            </h3>
            <div>
              {/* Continue with Google */}
              <button className="border w-[100%] border-grey-500 rounded-2xl py-2 flex items-center justify-center hover:bg-gray-100 transition">
                <div className="flex">
                  <span className="mr-2">
                    <img
                      className="w-8 ml-1 h-8 object-cover rounded-l-lg"
                      src="/src/assets/login/google.png"
                      alt="Google"
                    />
                  </span>
                  <p className="mt-1">Continue with Google</p>
                </div>
              </button>
              {/* Continue with Facebook */}
              <button className="border w-[100%] mt-2 border-grey-500 rounded-2xl py-2 flex items-center justify-center hover:bg-gray-100 transition">
                <div className="flex">
                  <span className="ml-6">
                    <img
                      className="w-7 h-7 object-cover rounded-l-lg"
                      src="/src/assets/login/fb.png"
                      alt="Facebook"
                    />
                  </span>
                  <p className="ml-1">Continue with Facebook</p>
                </div>
              </button>
              {/* Continue with Apple */}
              <button className="border w-[100%] mt-2 border-grey-500 rounded-2xl py-2 flex items-center justify-center hover:bg-gray-100 transition">
                <div className="flex">
                  <span className="mr-2">
                    <img
                      className="w-8 h-8 object-cover rounded-l-lg"
                      src="/src/assets/login/apple.png"
                      alt="Apple"
                    />
                  </span>
                  <p className="mt-1">Continue with Apple</p>
                </div>
              </button>
              <div className="flex items-center mt-3">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-2 text-gray-600">Or continue with</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              {/* Username */}
              {/* <div className="mt-5">
              <label htmlFor="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
              <Field type="username" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username"></Field>
              <ErrorMessage name="email" className="text-red-600" component="div"></ErrorMessage>
              </div> */}

              {/* Email */}
              <div className="mt-3">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  dark:text-white"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-grey-300 text-grey-900 text-sm rounded-lg focus:ring-semiBlue-500 focus:border-semiBlue-500 block w-full p-2.5 dark:text-white dark:focus:ring-semiBlue-500 dark:focus:border-semiBlue-500"
                  placeholder="name@gmail.com"
                ></Field>
                <ErrorMessage
                  name="email"
                  className="text-primary-600"
                  component="div"
                ></ErrorMessage>
              </div>
              {/* Password */}
              <div className="mt-3">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-grey-300 text-grey-900 text-sm rounded-lg focus:ring-semiBlue-500 focus:border-semiBlue-500 block w-full p-2.5 dark:text-white dark:focus:ring-semiBlue-500 dark:focus:border-semiBlue-500"
                  placeholder="********"
                ></Field>
                <ErrorMessage
                  name="password"
                  className="text-primary-600"
                  component="div"
                ></ErrorMessage>
              </div>

              <div className="flex justify-between mt-4">
                <div className="flex items-center mb-4">
                  <input type="checkbox" id="terms" className="mr-2" />
                  <label htmlFor="terms" className="text-gray-600">
                    Remamber me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-semiBlue-600 text-sm mb-4 block text-right underline underline-offset-1"
                >
                  Forget password?
                </a>
              </div>
              {/* ConfirmPassword */}
              {/* <div className="mt-5">
              <label htmlFor="confirmPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
              <Field type="password" name="confirmPassword" id="confirmPassword" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********"></Field>
              <ErrorMessage name="password" className="text-red-600" component="div"></ErrorMessage>
              </div> */}

              {/* Button login */}

              <button
                type="submit"
                class="cursor-pointer  text-white font-bold relative text-[14px] w-full h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
              >
                Log in
              </button>

              <p className="font-semibold text-header-5 text-center py-2">
                Don't have an account?
              </p>
              <Link to="/signup" className="w-full">
                <button
                  type="button"
                  class="cursor-pointer  text-white font-bold relative text-[14px] w-full h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
                >
                  Sign up
                </button>
              </Link>
            </div>
            {/* easyfound */}
            <div className=" mt-10 flex items-center">
              <Link to="/">
                <img src={Logo1} alt="" className="w-16 h-16" />
              </Link>
              <span className="font-pacifico"> Easy Found</span>
            </div>
          </Form>
        </Formik>
        <ToastContainer />
      </section>
    </>
  );
}
