import type ProductsResponse from "../interface/ProductsResponse";
import API from "./api"

// Obtener producto por ID
export const getProductsbyID = async (id: number) : Promise<ProductsResponse | null> => {
       try {
            const response = await API.get(`/productos/${id}`); 
            return response.data as ProductsResponse;
       } catch (error) {
            console.error("Error fetching product by ID:", error); 
            return null       
       }
};

// Obtener todos los productos
export const getAllProducts = async () : Promise<ProductsResponse[]> => {
    try {
        const response = await API.get ('/productos');
        return response.data as ProductsResponse[];
    } catch (error) {
        console.error("Error fetching all products:", error);
        return [];
    }
};

// Crear un nuevo producto
export const createProduct = async (newProduct: Omit<ProductsResponse, 'idProducto'>) : Promise<ProductsResponse | null> => {
    try {
        const response = await API.post("productos", newProduct);
        return response.data as ProductsResponse;
    } catch (error) {
        console.error("Error creating product:", error);
        return null;
    }
};

// Actualizar un producto existente
export const updateProduct = async (id: number, updatedData: Partial<ProductsResponse>) : Promise<ProductsResponse | null> => {
    try {   
        const response = await API.put(`/productos/${id}`, updatedData);
        return response.data as ProductsResponse;
    } catch (error) {
        console.error("Error updating product:", error);
        return null;
    }
};

// Eliminar un producto por ID
export const deleteProduct = async (id: number) : Promise<boolean> => {
    try {
        await API.delete(`/productos/${id}`);
        return true;
    } catch (error) {
        console.error("Error deleting product:", error);
        return false;
    }
};
