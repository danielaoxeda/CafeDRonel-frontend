import type { LoginRequest } from '../interface/LoginRequest'
import type { LoginResponse } from '../interface/LoginResponse'
import type { RegisterRequest } from '../interface/RegisterRequest'
import API from './api'

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await API.post<LoginResponse>('/auth/login', data)

    return response.data
}

export const register = async (data: RegisterRequest) => {
    const response = await API.post('/auth/register', data)

    return response.data
}
