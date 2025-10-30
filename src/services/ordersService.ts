import type OrdersResponse from "../interface/OrdersResponse";
import API from "./api"

// Obtener pedido por ID - GET pedidos/{id}
export const getOrdersbyID = async (id: number): Promise<OrdersResponse | null> => {
    try {
        const response = await API.get(`/pedidos/${id}`);
        return response.data as OrdersResponse;
    } catch (error) {
        console.error("Error fetching order by ID:", error);
        return null
    }
};

// Obtener pedido por usarioID - GET pedidos/usuario/{usuarioId}
export const getOrdersbyUserID = async (usuarioId: number): Promise<OrdersResponse | null> => {
    try {
        const response = await API.get(`/pedidos/usuario/${usuarioId}`);
        return response.data as OrdersResponse;
    } catch (error) {
        console.error("Error fetching order by user ID:", error);
        return null
    }
};

// Obtener todos los pedidos - GET /pedidos/
export const getAllOrders = async (): Promise<OrdersResponse[]> => {
    try {
        const response = await API.get('/pedidos');
        console.log(response.data)
        return response.data as OrdersResponse[];
    } catch (error) {
        console.error("Error fetching all orders:", error);
        return [];
    }
};

// Crear un nuevo pedido -  POST /pedidos/
export const createOrders = async (newOrder: Omit<OrdersResponse, 'idOrder'>): Promise<OrdersResponse | null> => {
    try {
        const response = await API.post("pedidos", newOrder);
        return response.data as OrdersResponse;
    } catch (error) {
        console.error("Error creating order:", error);
        return null;
    }
};

// Actualizar un pedido existente por ID - PUT /pedidos/{id}
export const updateOrderbyID = async (id: number, updatedData: Partial<OrdersResponse>): Promise<OrdersResponse | null> => {
    try {
        const response = await API.put(`/pedidos/${id}`, updatedData);
        return response.data as OrdersResponse;
    } catch (error) {
        console.error("Error updating orders:", error);
        return null;
    }
};

// Actualizar un pedido por estado - PATCH /pedidos/{id}/estado
export const updateOrderStateByID = async (id: number, newState: string): Promise<boolean> => {
    try {
        const response = await API.patch(`/pedidos/${id}/estado`, { estado: newState });
        return response.status === 200;
    } catch (error: any) {
        console.error("Error al actualizar estado del pedido:", error.response?.data || error.message);
        return false;
    }
};

// Eliminar un pedido por ID - DELETE /pedidos/{id}
export const deleteOrder = async (id: number): Promise<boolean> => {
    try {
        await API.delete(`/pedidos/${id}`);
        return true;
    } catch (error) {
        console.error("Error deleting order:", error);
        return false;
    }
};
