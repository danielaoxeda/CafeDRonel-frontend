export default interface OrdersResponse {
    idPedido: number,

    usuario: {
        idUsuario: number,
        nombre: string,
        apellido: string,
        correo: string,
        telefono: string,
        direccion: string,
        activo: boolean,
        rol: string,
        recoveryCode?: string | null;
    };

    fecha: string,
    estado: string,
    telefono: string,
    direccion: string,

    pago: {
        idPago: number,
        metodoPago: string,
        monto: number,
        estado: string,
        referencia: string,
        fechaPago: string,
    };

    envio: {
        idEnvio: number,
        metodoEnvio: string,
        estado: string,
        fechaEnvio: string,
        fechaEntrega: string,
        numeroSeguimiento: string,
        direccion: string,
        departamento: string,
        provincia: string,
        distrito: string,
        costoEnvio: number,
    };

    detalles: {
        idDetalle: number,
        producto: {
            idProducto: number,
            nombre: string,
            categoria: string,
            subtipo: string,
            descripcion: string,
            precio: number,
            stock: number,
            activo: boolean,
        };
        cantidad : number,
        precioUnitario : number,
        subtotal: number,

    }[];
}

