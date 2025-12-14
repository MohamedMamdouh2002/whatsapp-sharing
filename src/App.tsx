import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./shared/ui/layout/Layout";
import "react-loading-skeleton/dist/skeleton.css";
import Home from "./pages/home/Home";

const routers = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
]);
function App() {
  return (
      <RouterProvider router={routers} />
  );
}

export default App;
