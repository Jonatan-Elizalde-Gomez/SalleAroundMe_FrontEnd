import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
const baseUrl = "https://salle-around-me.onrender.com/";
var token = "";
if (localStorage.getItem("token")) {
  token = localStorage.getItem("token").replace(/['"]+/g, "");
}

export const loginService = async (credentials) => {
  try {
    const response = await axios.post(`${baseUrl}user/login`, credentials);
    if (response.data.message === "Credenciales inválidas") {
      console.error("Error de respuesta:", response.data.message);
      return null;
    }
    // Devuelve los datos directamente
    return response.data;
  } catch (error) {
    // Maneja los errores como antes
    if (error.request) {
      console.error("No se recibió respuesta del servidor");
    } else {
      console.error("Error al configurar la solicitud:", error.message);
    }
    return null;
  }
};

export const createAttractionService = async (dataJson, token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.post(`${baseUrl}attraction/`, dataJson, {
      headers: headers,
    });
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

export const registerUserService = async (dataJson) => {
  console.log(token);
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.post(`${baseUrl}user/`, dataJson, {
      headers: headers,
    });
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

export const registerAuthorService = async (dataJson) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.post(`${baseUrl}author/`, dataJson, {
      headers: headers,
    });
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

export const registerCategoryService = async (dataJson) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.post(`${baseUrl}category/`, dataJson, {
      headers: headers,
    });
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

export const registerMaterialService = async (dataJson) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.post(`${baseUrl}material/`, dataJson, {
      headers: headers,
    });
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

export const registerTecniqueService = async (dataJson) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.post(`${baseUrl}tecnique/`, dataJson, {
      headers: headers,
    });
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

export const registerStyleService = async (dataJson) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.post(`${baseUrl}style/`, dataJson, {
      headers: headers,
    });
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

export function getAllAtractions(setAtraction, id) {
  // Asumiendo que quieres eliminar comillas
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const cadena = `attraction/GetAttractionsByCategory/${id}`;
  //const cadena = "attraction/"

  return axios
    .get(`${baseUrl}${cadena}`, { headers: headers })
    .then((response) => {
      if (response.status === 200) {
        setAtraction(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getAllUsers(setUsers) {
  // Asumiendo que quieres eliminar comillas
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .get(`${baseUrl}user/`, { headers: headers })
    .then((response) => {
      if (response.status === 200) {
        setUsers(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getAllCategories(setAllCategories) {
  // Asumiendo que quieres eliminar comillas
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .get(`${baseUrl}attraction/GetAllCategories`, { headers: headers })
    .then((response) => {
      if (response.status === 200) {
        setAllCategories(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getAllAuthors(setAuthors) {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .get(`${baseUrl}author/`, { headers: headers })
    .then((response) => {
      if (response.status === 200) {
        setAuthors(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getAllTecniques(setTequiques) {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .get(`${baseUrl}tecnique/`, { headers: headers })
    .then((response) => {
      if (response.status === 200) {
        setTequiques(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getAllMaterials(setMaterials) {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .get(`${baseUrl}material/`, { headers: headers })
    .then((response) => {
      if (response.status === 200) {
        setMaterials(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getAllStyles(setStyles) {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .get(`${baseUrl}style/`, { headers: headers })
    .then((response) => {
      if (response.status === 200) {
        setStyles(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

// All Puts ********************************

export const updateStyleService = async (dataJson, id) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  await axios
    .put(`${baseUrl}style/${id}`, dataJson, { headers: headers })
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateMaterialService = async (dataJson, id) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  await axios
    .put(`${baseUrl}material/${id}`, dataJson, { headers: headers })
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateTecniqueService = async (dataJson, id) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  await axios
    .put(`${baseUrl}tecnique/${id}`, dataJson, { headers: headers })
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateCategoryService = async (dataJson, id) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  await axios
    .put(`${baseUrl}category/${id}`, dataJson, { headers: headers })
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateAuthorService = async (dataJson, id) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  await axios
    .put(`${baseUrl}author/${id}`, dataJson, { headers: headers })
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateUserService = async (dataJson, id) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  await axios
    .put(`${baseUrl}user/${id}`, dataJson, { headers: headers })
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateAttractionService = async (dataJson, id) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  await axios
    .put(`${baseUrl}attraction/${id}`, dataJson, { headers: headers })
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// Deletes

const deleteEntityService = async (entityType, id) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.delete(`${baseUrl}${entityType}/${id}`, {
      headers: headers,
    });

    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: `Eliminación de ${entityType} exitosa`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: `Error al eliminar ${entityType}`,
        text: "Por favor, intenta de nuevo",
      });
    }
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: `Error al eliminar ${entityType}`,
      text: `Error: ${e.message}`,
    });
  }
};

export const deleteStyleService = async (id) => {
  await deleteEntityService("style", id);
};

export const deleteMaterialService = async (id) => {
  await deleteEntityService("material", id);
};

export const deleteTecniqueService = async (id) => {
  await deleteEntityService("tecnique", id);
};

export const deleteCategoryService = async (id) => {
  await deleteEntityService("category", id);
};

export const deleteAuthorService = async (id) => {
  await deleteEntityService("author", id);
};

export const deleteUserService = async (id) => {
  await deleteEntityService("user", id);
};

export const deleteAttractionService = async (id) => {
  await deleteEntityService("attraction", id);
};
