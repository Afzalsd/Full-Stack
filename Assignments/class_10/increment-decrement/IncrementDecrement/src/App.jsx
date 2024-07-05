import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Parent from "./components/parent/Parent";
function App() {
  // Create browser router object
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "parent",
          element: <Parent />,
        },
      ],
    },
  ]);

  return <RouterProvider router={browserRouter} />;
}

export default App;
