import { createBrowserRouter } from "react-router-dom";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/details', element: <CountryDetailsPage /> }
])

export default router;