import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.jsx";
import ProjectDetail from "./routes/ProjectDetail.jsx";
import Navbar from "./components/Navbar.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/projects/:projectId",
		element: <ProjectDetail />,
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
