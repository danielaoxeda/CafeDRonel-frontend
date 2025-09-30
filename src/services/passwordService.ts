import type ForgotRequest from '../interface/ForgotRequest.ts'
import API from './api.ts'
import type ResetPasswordRequest from '../interface/ResetPasswordRequest.ts'

export const forgot = async (data: ForgotRequest) => {
    const response = await API.post('/auth/forgot', data)

    return response.data
}

export const resetPassword = async (data: ResetPasswordRequest) => {
    const response = await API.post('/auth/reset-password', data)

    return response.data
}
