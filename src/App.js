import { RouterProvider } from "react-router-dom";
import { Router } from "./Router/Routes";
function App() {
  return (
    <div className="bg-gray-400 h-screen">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
