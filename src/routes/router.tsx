import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { CatFacts } from "../components/Api/Animals/CatFacts/CatFacts";
import Dogs from "../components/Api/Animals/Dogs/Dogs";
import ErrorPage from "../components/Error/ErrorPage";
import { MainPage } from "../components/MainPage/MainPage";
import TheMealDb from "../components/Api/FoodAndDrink/TheMealDb/TheMealDb";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/CatFacts",
        element: <CatFacts />,
      },
      {
        path: "/Dogs",
        element: <Dogs />,
      },

      {
        path: "/TheMealDb",
        element: <TheMealDb />,
      },

      
    ],
  },
]);

export default router;
