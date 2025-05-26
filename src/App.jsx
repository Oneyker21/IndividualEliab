import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../src/assets/database/authcontext";
import ProtectedRoute from "./components/ProtectedRoute"; 
import Login from './views/Login'
import Encabezado from "./components/Encabezado";
import Inicio from "./views/Inicio";
import Categorias from "./views/Categorias";
import Productos from "./views/Productos";
import Catalogo from "./components/Catalogo/Catalogo";
import Libros from "./views/Libros";
import Clima from "./components/Clima/Clima";
import Estadistica from "./components/Estadisticas/Estadisticas";
import Pronunciacion from "./components/Pronunciacion/Pronunciacion";
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Encabezado />
          <main className="margen-superior-main">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/inicio" element={<ProtectedRoute element={<Inicio />} />} />
              <Route path="/categorias" element={<ProtectedRoute element={<Categorias />} />}/>
              <Route path="/productos" element={<ProtectedRoute element={<Productos />} />}/>
              <Route path="/catalogo" element={<ProtectedRoute element={<Catalogo />} />} />
              <Route path="/libros" element={<ProtectedRoute element={<Libros />} />} />
              <Route path="/clima" element={<ProtectedRoute element={<Clima />} />} />
              <Route path="/pronunciacion" element={<ProtectedRoute element={<Pronunciacion />} />} />
              <Route path="/estadisticas" element={<ProtectedRoute element={<Estadistica />} />}/>
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App;