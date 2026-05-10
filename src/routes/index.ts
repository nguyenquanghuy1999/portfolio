import LayoutNotSection from "../layouts/LayoutNotSection";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/Home/NotFound";

export const routes = [
    { path: "/", component: Home, layout: MainLayout },
    { path: "*", component: NotFound, layout: LayoutNotSection },
]