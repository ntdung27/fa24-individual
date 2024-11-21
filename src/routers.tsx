import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutWebsite from "./pages/(website)/layout";
import HomePage from "./pages/(website)/home/page";
import AboutPage from "./pages/(website)/about/page";
import LayoutAdmin from "./pages/(admin)/layout";
import DashboardPage from "./pages/(admin)/dashboard/page";
import AdminProductsPage from "./pages/(admin)/products/page";
import ReactQueryDemo from "./ReactQueryDemo";
import AdminProductsAddPage from "./pages/(admin)/products-add/page";
import AdminProductsEditPage from "./pages/(admin)/products-edit/page";
import SignupPage from "./pages/(auth)/signup/page";
import SigninPage from "./pages/(auth)/signin/page";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutWebsite />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "about", element: <AboutPage /> },
            { path: "react-query", element: <ReactQueryDemo /> },
            { path: "signup", element: <SignupPage /> },
            { path: "signin", element: <SigninPage /> },
        ],
    },
    {
        path: "/admin",
        element: <PrivateRouter><LayoutAdmin /></PrivateRouter>,
        children: [
            { index: true, element: <Navigate to={"/admin/dashboard"} /> },
            { path: "dashboard", element: <DashboardPage /> },
            { path: "products", element: <AdminProductsPage /> },
            { path: "products/add", element: <AdminProductsAddPage /> },
            { path: "products/edit/:id", element: <AdminProductsEditPage /> },
        ],
    },
]);
