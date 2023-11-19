import axios from 'axios';

const baseUrl = "https://salle-around-me.onrender.com/";

export const loginService = async credentials => {
  try {
    const response = await axios.post(`${baseUrl}user/login`, credentials);
    // La solicitud fue realizada y el servidor respondió con un estado de error
    if (response.data.message === "Credenciales inválidas") {
      console.error("Error de respuesta:", response.data.message);
      return;
    }
    else {
      localStorage.setItem('token', JSON.stringify(response.data.token));
      localStorage.setItem('userId', JSON.stringify(response.data.user_id));
      localStorage.setItem('name', JSON.stringify(response.data.name));
      return response.data;
    }
  } catch (error) {
    if (error.request) {
      // La solicitud fue realizada pero no se recibió respuesta
      console.error("No se recibió respuesta del servidor");
    } else {
      // Ocurrió un error al configurar la solicitud
      console.error("Error al configurar la solicitud:", error.message);
    }
  }
};

export const createAttractionService = async (token, dataJson) => {
  const headers = {
    "Authorization": `Bearer ${token.replace(/['"]+/g, '')}`,
  };
  try {
    const response = await axios.post(`${baseUrl}attraction/`, dataJson, {headers: headers});
    console.log(response.data);
  } catch (error) {
    if (error.request) {
      // La solicitud fue realizada pero no se recibió respuesta
      console.error("No se recibió respuesta del servidor");
    } else {
      // Ocurrió un error al configurar la solicitud
      console.error("Error al configurar la solicitud:", error.message);
    }
  }
};

export const registerUserService = async (token, dataJson) => {
  const headers = {
    "Authorization": `Bearer ${token.replace(/['"]+/g, '')}`,
  };
  try {
    const response = await axios.post(`${baseUrl}user/`, dataJson, {headers: headers});
    console.log(response.data);
  } catch (error) {
    if (error.request) {
      // La solicitud fue realizada pero no se recibió respuesta
      console.error("No se recibió respuesta del servidor");
    } else {
      // Ocurrió un error al configurar la solicitud
      console.error("Error al configurar la solicitud:", error.message);
    }
  }
};