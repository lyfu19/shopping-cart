import App from "../App";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
];

export default routes;
