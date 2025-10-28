import API from './api'
import type { Product } from '../store/cartStore'

export const getProductos = async (): Promise<Product[]> => {
    try {
        const response = await API.get<Product[]>('/productos')
        return response.data
    } catch (error) {
        console.error('Error en getProductos:', error)
        throw error
    }
}