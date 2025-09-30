export default interface ResetPasswordRequest {
    email: string
    recoveryCode: string
    newPassword: string
}
