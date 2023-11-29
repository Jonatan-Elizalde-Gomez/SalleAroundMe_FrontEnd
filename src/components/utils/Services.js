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


const addEntityService = async (dataJson, entityType) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.post(`${baseUrl}${entityType}/`, dataJson, { headers: headers })


    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: `Añadir de ${entityType} exitosa`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: `Error al añadir ${entityType}`,
        text: "Por favor, intenta de nuevo",
      });
    }
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: `Error al añadir ${entityType}`,
      text: `Error: ${e.message}`,
    });
  }
};


export const registerStyleService = async (dataJson) => {
  await addEntityService(dataJson, "style");
};

export const registerMaterialService = async (dataJson) => {
  await addEntityService(dataJson, "material");
};

export const registerTecniqueService = async (dataJson) => {
  await addEntityService(dataJson, "tecnique");
};

export const registerCategoryService = async (dataJson) => {
  await addEntityService(dataJson, "category");
};

export const registerAuthorService = async (dataJson) => {
  await addEntityService(dataJson, "author");
};

export const registerUserService = async (dataJson) => {
  await addEntityService(dataJson, "user");
};

export const createAttractionService = async (dataJson) => {
  await addEntityService(dataJson, "attraction");
};



export function getAllAtractions(setAtraction, id) {
  // Asumiendo que quieres eliminar comillas
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const cadena = `attraction/GetAttractionsByCategoryFull/${id}`;
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


const updateEntityService = async (dataJson, entityType, id) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.put(`${baseUrl}${entityType}/${id}`, dataJson, { headers: headers })


    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: `Actualización de ${entityType} exitosa`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: `Error al actualizar ${entityType}`,
        text: "Por favor, intenta de nuevo",
      });
    }
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: `Error al actualizar ${entityType}`,
      text: `Error: ${e.message}`,
    });
  }
};

export const updateStyleService = async (dataJson, id) => {
  await updateEntityService(dataJson, "style", id);
};

export const updateMaterialService = async (dataJson, id) => {
  await updateEntityService(dataJson, "material", id);
};

export const updateTecniqueService = async (dataJson, id) => {
  await updateEntityService(dataJson, "tecnique", id);
};

export const updateCategoryService = async (dataJson, id) => {
  await updateEntityService(dataJson, "category", id);
};

export const updateAuthorService = async (dataJson, id) => {
  await updateEntityService(dataJson, "author", id);
};

export const updateUserService = async (dataJson, id) => {
  await updateEntityService(dataJson, "user", id);
};

export const updateAttractionService = async (dataJson, id) => {
  await updateEntityService(dataJson, "attraction", id);
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
