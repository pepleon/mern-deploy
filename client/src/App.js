import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate} from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import {routes} from "./routes/routes"
import { Suspense } from 'react';

const router = createBrowserRouter(
 createRoutesFromElements(
  <Route> 
    <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`}/>}/>
  <Route path={routes.main.path} element={<routes.main.element />}>

  <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element />}/>
  <Route path={routes.view.path} element={<routes.view.element/>}/>

  </Route>

  <Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`}/>}/>

  </Route>
 )

)



function App() {
  return (
 <Suspense>
  <RouterProvider router={router}  />
  </Suspense>
  
  );
}

export default App;
