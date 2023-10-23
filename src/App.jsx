import { useState } from 'react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import ReactLayouts from './layouts/ReactLayouts';
import Error404 from './layouts/Error404';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<ReactLayouts />}>
        
        <Route path='*' element={<Error404 />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
