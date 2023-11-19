import React, { useState } from 'react';
import iconX from "../../../assets/times2.png";
import eyeOff from "../../../assets/eye-off.png";
import { useNavigate } from "react-router-dom"; 
import { registerUserService } from "../../utils/Services";

function UserModal({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
  const [isValid, setIsValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Validar el formato del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(inputEmail));
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    // Validar que la contraseña tenga al menos 8 caracteres
    setIsValidPassword(inputPassword.length >= 8);
  };

  const handleConfirmPasswordChange = (e) => {
    const inputConfirmPassword = e.target.value;
    setConfirmPassword(inputConfirmPassword);

    // Validar que la confirmación de contraseña coincida con la contraseña
    setIsValidConfirmPassword(inputConfirmPassword === password);
  };

  const handleCreateRecord = async () => {
    const token = localStorage.getItem("token");
    // Aquí puedes hacer lo que necesites con la información del formulario
    const dataJson = {	
      "name": name,
      "email": email,
      "password": password,
    }
    try {
      if(isValidPassword === false || isValidConfirmPassword === false || isValid === false){
        console.log("Favor de llenar los campos correctamente");
      }
      else{
        await registerUserService(token, dataJson);
      }
    } catch (error) {
      console.error("Error creating attraction:", error);
    }
    console.log(dataJson);
  };

  return (

    <div>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-[575px] max-h-[600px] overflow-y-auto">
          <div className='flex justify-between'>
            <h2 className="text-xl font-semibold">Crear Registro</h2>
            <img src={iconX} className="w-6 h-6 cursor-pointer" alt="x" onClick={onClose}/>
          </div>
          <p className="text-base text-gray-500 mb-6">Completa el siguiente formulario para añadir un nuevo registro</p>
          {/* Content */}

          {/* Nombre */}
          <label className="block text-zinc-800 text-xs mb-1">
            Nombre
          </label>
          <input
            type="text"
            placeholder="Nombre"
            className="w-full mb-4 p-2 border border-gray-300 placeholder-stone-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Email */}
          <label className="block text-zinc-800 text-xs mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={`w-full mb-4 p-2 placeholder-stone-300 rounded border ${isValid ? 'border-gray-300' : 'border-red-500'} rounded focus:outline-none focus:ring ${isValid ? 'focus:border-blue-500' : 'focus:border-red-500'}`}
            value={email}
            onChange={handleEmailChange}
          />

          {/* Campo de Contraseña */}
          <label className="block text-zinc-800 text-xs mb-1">
          Contraseña
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Ingrese su contraseña"
              className={`w-full mb-4 p-2 border ${isValidPassword ? 'border-gray-300' : 'border-red-500'} rounded focus:outline-none focus:ring ${isValidPassword ? 'focus:border-blue-500' : 'focus:border-red-500'}`}
              value={password}
              onChange={handlePasswordChange}
            />

            {/* Botón de Ojo */}
            <button
              className="absolute top-0 right-0 mr-2 p-2"
              onClick={handleTogglePasswordVisibility}
            >
              <img
                src={eyeOff}
                alt={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                className="w-6 h-6"
              />
            </button>
          </div>

          {/* Mensaje de error si la contraseña no es válida */}
          {!isValidPassword && (
            <p className="text-red-500 text-xs mt-1">La contraseña debe tener al menos 8 caracteres.</p>
          )}

          {/* Campo de Confirmación de Contraseña */}
          <label className="block text-zinc-800 text-xs mb-1">
          Repetir Contraseña
          </label>
          <div className="relative">
            <input
                type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              placeholder="Confirme su contraseña"
              className={`w-full mb-4 p-2 border ${isValidConfirmPassword ? 'border-gray-300' : 'border-red-500'} rounded focus:outline-none focus:ring ${isValidConfirmPassword ? 'focus:border-blue-500' : 'focus:border-red-500'}`}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {/* Botón de Ojo */}
            <button
              className="absolute top-0 right-0 mr-2 p-2"
              onClick={handleToggleConfirmPasswordVisibility}
            >
              <img
                src={eyeOff}
                alt={showConfirmPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                className="w-6 h-6"
              />
            </button>
          </div>

          {/* Mensaje de error si la confirmación de contraseña no coincide */}
          {!isValidConfirmPassword && (
            <p className="text-red-500 text-xs mt-1">Las contraseñas no coinciden.</p>
          )}

          {/* Botones */}
          <div className="flex justify-end mt-5">
            <button
              className="text-neutral-500 w-52 h-9 border rounded-lg border-solid border-neutral-500 flex justify-center items-center px-4 py-2 mr-2 hover:bg-gray-100"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              className="bg-blue-500 text-white w-52 h-9 px-4 py-2 flex justify-center items-center rounded-lg hover:bg-blue-600"
              onClick={handleCreateRecord}
            >
              Crear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserModal;