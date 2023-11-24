import axios from 'axios';
import React from "react";
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




export function getAllAtractions( setAtraction, id ) {
  const token = localStorage.getItem("token").replace(/['"]+/g, ''); // Asumiendo que quieres eliminar comillas
  const headers = {
    "Authorization": `Bearer ${token}`,
  };

  return axios
    .get(`${baseUrl}attraction/GetAttractionsByCategory/${id}`, { headers: headers })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        setAtraction(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}


export function getAllUsers( setUsers ) {
  const token = localStorage.getItem("token").replace(/['"]+/g, ''); // Asumiendo que quieres eliminar comillas
  const headers = {
    "Authorization": `Bearer ${token}`,
  };

  return axios
    .get(`${baseUrl}user/`, { headers: headers })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        setUsers(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getAllCategories( setUsers ) {
  const token = localStorage.getItem("token").replace(/['"]+/g, ''); // Asumiendo que quieres eliminar comillas
  const headers = {
    "Authorization": `Bearer ${token}`,
  };

  return axios
    .get(`${baseUrl}attraction/GetAllCategories`, { headers: headers })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        setUsers(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}


export function getAllAuthors( setAuthors ) {
  const token = localStorage.getItem("token").replace(/['"]+/g, ''); // Asumiendo que quieres eliminar comillas
  const headers = {
    "Authorization": `Bearer ${token}`,
  };

  return axios
    .get(`${baseUrl}author/`, { headers: headers })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        setAuthors(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}