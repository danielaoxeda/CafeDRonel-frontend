import API from './api'
import type { DetallePedido } from '../store/cartStore'

export type PedidoPayload = {
    idPedido: number
    idUsuario: number
    fecha: string
    estado: string
    telefono: string
    direccion: string
    detalles: DetallePedido[]
}

export const enviarPedido = async (pedido: PedidoPayload, token: string) => {
    const response = await API.post('/pedidos', pedido, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data
}