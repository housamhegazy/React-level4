import Create from "pages/create/Create";
import Home from "pages/home/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Root from "./pages/Root";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      {/* ... etc. */}
    </Route>
  )
);
function App() {

  return (
    <div className="App">
          <RouterProvider router={router} />
    </div>
  );
}

export default App;
