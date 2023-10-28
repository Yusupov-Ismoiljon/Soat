import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import ReactLayouts from './layouts/ReactLayouts';
import Error404 from './layouts/Error404';
import Home from "./components/Home";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<ReactLayouts />}>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error404 />} />
      </Route>
    )
  );

  return (
    <div className='font-jost'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
