import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Servicepage from "./pages/service-page.jsx";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout.jsx";
import Homepage from "./pages/homepage.jsx";
import DetailListingPage from "./pages/DetailsListing-page.jsx";
import ServiceListing from "./pages/servicelisting-page.jsx";
import SearchPage from "./pages/search-page.jsx";
import LoginForm from "./pages/form/LoginForm.jsx";
import SignUpForm from "./pages/form/SignupForm.jsx";
import Faq from "./pages/Faq.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import { ErrorPage } from "./pages/404/ErrorPage.jsx";
import Test from "./test.jsx";
import { Profile } from "./pages/Profilepage.jsx";
import CloneDetails from "./store/CloneDetail.jsx";
import { CardProfile } from "./pages/profile/CardProfile.jsx";
import { TestAPI } from "./store/ServiceListingwithAPI.jsx";
import GeminiChatBot from "./components/AI-chatbot/GeminiChatBot.jsx";
import AuthLayout from "./components/layout/AuthLayout.jsx"; // Import the new layout

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Normal layout with Navbar and Footer
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/servicepage",
        element: <Servicepage />,
      },
      {
        path: "/detailsListingpage",
        element: <DetailListingPage />,
      },
      {
        path: "/api/:id",
        element: <CloneDetails />,
      },
      // {
      //   path: "/productListingpage",
      //   element: <ServiceListing />,
      // },
      {
        path: "/searchpage",
        element: <SearchPage />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      // {
      //   path: "/a",
      //   element: <Test />,
      // },
      {
        path: "/api",
        element: <TestAPI />,
      },
      {
        path: "/ai",
        element: <GeminiChatBot />,
      },
      {
        path: "/acc",
        element: <Profile />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/aboutus",
        element: <Aboutus />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthLayout>
        <LoginForm /> {/* Login form inside AuthLayout */}
      </AuthLayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthLayout>
        <SignUpForm /> {/* Signup form inside AuthLayout */}
      </AuthLayout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
