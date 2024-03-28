import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import JobDetails from "./components/JobDetails/JobDetails";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <ErrorPage></ErrorPage>,
		element: <Root></Root>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/applied",
				element: <AppliedJobs></AppliedJobs>,
			},
			{
				path: "/job/:id",
				loader: () => fetch(`jobs.json`), // do not load all data. load only what you need
				element: <JobDetails></JobDetails>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
