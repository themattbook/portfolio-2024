import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectDetail from "./routes/ProjectDetail.jsx";
import Main from "./routes/Main.jsx";
import Navbar from "./components/Navbar.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/projects/:projectId",
		element: <ProjectDetail />,
	},
	{
		path: "/profile",
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
