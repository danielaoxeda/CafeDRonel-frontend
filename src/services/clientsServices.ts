import type ClientsResponse from "../interface/ClientsResponse";
import API from "./api"

// Obtener cliente por ID - GET BY ID clientes/{id}
export const getClientsbyID = async (id: number) : Promise<ClientsResponse | null> => {
       try {
            const response = await API.get(`/clientes/${id}`); 
            return response.data as ClientsResponse;
       } catch (error) {
            console.error("Error fetching client by ID:", error); 
            return null       
       }
};

// Obtener todos los clientes - GET ALL
export const getAllClients = async () : Promise<ClientsResponse[]> => {
    try {
        const response = await API.get ('/clientes');
        return response.data as ClientsResponse[];
    } catch (error) {
        console.error("Error fetching all products:", error);
        return [];
    }
};



// Crear un nuevo cliente - POST
export const createClient = async (newProduct: Omit<ClientsResponse, 'idClientes'>) : Promise<ClientsResponse | null> => {
    try {
        const response = await API.post("clientes", newProduct);
        return response.data as ClientsResponse;
    } catch (error) {
        console.error("Error creating clients:", error);
        return null;
    }
};

// Actualizar un cliente existente - PUT /clientes/{id}
export const updateClient = async (id: number, updatedData: Partial<ClientsResponse>) : Promise<ClientsResponse | null> => {
    try {   
        const response = await API.put(`/clients/${id}`, updatedData);
        return response.data as ClientsResponse;
    } catch (error) {
        console.error("Error updating client:", error);
        return null;
    }
};

// Eliminar un cliente por ID - DELETE /clientes/{id}
export const deleteClient = async (id: number) : Promise<boolean> => {
    try {
        await API.delete(`/clientes/${id}`);
        return true;
    } catch (error) {
        console.error("Error deleting client:", error);
        return false;
    }
};

// Buscar clientes por nombre - GET BY NAME /clientes/buscar
export const getClientsByName = async (name: string): Promise<ClientsResponse[]> => {
  try {
    const response = await API.get(`/clientes/buscar`, {
      params: { nombre: name },
    });
    return response.data as ClientsResponse[];
  } catch (error) {
    console.error("Error fetching clients by name:", error);
    return [];
  }
};

// Buscar clientes por correo - GET BY EMAIL /clientes/correo/{correo}
export const getClientByEmail = async (email: string): Promise<ClientsResponse | null> => {
  try {
    const response = await API.get(`/clientes/correo/${email}`);
    return response.data as ClientsResponse;
  } catch (error) {
    console.error("Error fetching client by email:", error);
    return null;
  }
};


// Verificar si existe cliente por correo - GET clientes/existe/{correo}
export const checkClientExists = async (email: string): Promise<boolean> => {
  try {
    const response = await API.get(`/clientes/existe/${email}`);
    return response.data.exists; 
  } catch (error) {
    console.error("Error checking client existence:", error);
    return false;
  }
};

// Obtener estadísticas de clientes - GET clientes/estadisticas
export const getClientStats = async (): Promise<any> => {
  try {
    const response = await API.get("/clientes/estadisticas");
    return response.data;
  } catch (error) {
    console.error("Error fetching client stats:", error);
    return null;
  }
};

// Obtener todos los clientes sin paginación - GET clientes/all
export const getAllClientsNoPagination = async (): Promise<ClientsResponse[]> => {
  try {
    const response = await API.get("/clientes/all");
    return response.data as ClientsResponse[];
  } catch (error) {
    console.error("Error fetching all clients (no pagination):", error);
    return [];
  }
};