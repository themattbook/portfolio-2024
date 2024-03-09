import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import Navbar from "./components/Navbar.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<div className='container'>
			<Navbar />
			<RouterProvider router={router} />
		</div>
	</React.StrictMode>
);
