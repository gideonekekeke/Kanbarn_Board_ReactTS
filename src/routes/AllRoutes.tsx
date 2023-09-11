import { createBrowserRouter } from "react-router-dom";
import MyDay from "../pages/MyDay";
import WebLayout from "../components/Layouts/WebLayout";
import Important from "../pages/Important";
import Board from "../pages/Board";
import ErrorBoundary from "../utils/ErrorBoundary";

const Index = createBrowserRouter([
	{
		path: "/",
		element: <WebLayout />,
		errorElement: <ErrorBoundary />,
		hasErrorBoundary: true,
		children: [
			{
				index: true,
				element: <MyDay />,
			},

			{
				path: "important",
				element: <Important />,
			},
			{
				path: "board",
				element: <Board />,
			},
		],
	},
]);

export default Index;
