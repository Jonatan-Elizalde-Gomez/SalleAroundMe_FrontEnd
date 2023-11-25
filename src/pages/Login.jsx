import React, { useState } from "react";
import LogoSalle from "../../src/assets/salle_logo2.png";
import { useNavigate } from "react-router-dom";
import { loginService } from "../components/utils/Services";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Obtiene la función de navegación

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      if (email === "" || password === "") {
        console.log("No se puede iniciar sesión con campos vacíos");
        return;
      }
      const loginData = await loginService({
        email: email,
        password: password,
      });
      
      // Verificar si loginData no es null
      if (loginData) {
        // Establecer los elementos en localStorage
        localStorage.setItem('token', JSON.stringify(loginData.token));
        localStorage.setItem('userId', JSON.stringify(loginData.user_id));
        localStorage.setItem('name', JSON.stringify(loginData.name));
        localStorage.setItem('email', JSON.stringify(loginData.email));
        
        // La solicitud de inicio de sesión fue exitosa, ahora puedes navegar a la nueva ruta
        await navigate("/admin");
      } else {
        console.log("No se pudo iniciar sesión con los datos proporcionados.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[600px] p-4 rounded-lg">
        <div className="flex justify-center mb-10">
          <img src={LogoSalle} className="w-28 h-28" alt="" />
        </div>
        <h1 className="text-3xl text-gray-900 font-bold">Iniciar Sesión</h1>
        <h1 className="text-gray-500 mb-4">Ingrese su correo y contraseña</h1>
        <form>
          <div className="mb-4">
            <label
              className="text-xs block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Correo electrónico
            </label>
            <input
              className="text-stone-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Escribe tu correo electrónico aquí..."
              value={email}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="text-xs block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className="text-stone-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Escribe tu contraseña aquí..."
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex flex-col">
            <a
              className="flex justify-end mb-5 inline-block align-baseline underline text-sm text-sm text-zinc-800 hover:text-zinc-600"
              href="#"
            >
              ¿Olvidaste tu contraseña?
            </a>
            <button
              className="bg-sky-600 hover:bg-sky-800 text-white text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
