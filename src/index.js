import App from './App';
import React from 'react';
import ReactDOM from "react-dom/client";
import Login from "./pages/SignIn";
import Cadastro from "./pages/SignUp";
import Perfil from "./pages/Perfil";
import Home from "./pages/home";
import NoPage from "./pages/NoPage";
import RecuperarSenha from "./pages/RecuperarSenha";
import { 
  createBrowserRouter,
  Routes,
  Route,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Login/>,
  },
  {
    path:"/Cadastro",
    element: <Cadastro/>
  },
  {
    path:"/RecuperarSenha",
    element: <RecuperarSenha/>
  }
])

/*
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="Perfil" element={<Perfil />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
