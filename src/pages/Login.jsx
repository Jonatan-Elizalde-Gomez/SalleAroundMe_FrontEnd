import React, { useState } from "react";
import LogoSalle from "../../src/assets/salle_logo2.png";
import { useNavigate } from "react-router-dom"; 

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Obtiene la función de navegación

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      // Las credenciales son válidas, puedes redirigir al usuario o realizar otras acciones
      navigate("/admin");
    } else {
      console.log("Credenciales incorrectas");

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
              htmlFor="username"
            >
              Correo electrónico
            </label>
            <input
              className="text-stone-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Escribe tu correo electrónico aquí..."
              value={username}
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
