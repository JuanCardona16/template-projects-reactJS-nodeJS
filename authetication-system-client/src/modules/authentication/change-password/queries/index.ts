import { useMutation } from "@tanstack/react-query"
import ChangePasswordServices from '../services/changePassword.service'

export const useSendCodeSecurity = () => {

  const { mutateAsync: sendCodeSecurity, isPending, isError } = useMutation({
    mutationKey: ['auth/changePassword'],
    mutationFn: ChangePasswordServices.sendCode,
    onSuccess: (data) => {
      // Handle success
      console.log(data)
    },
    onError: (error) => {
      // Handle error
      console.log(error)
    }
  })

  return {
    sendCodeSecurity,
    isPending,
    isError,
  }

}

export const useVerifyCodeSecurity = () => {

  const { mutateAsync: verifyCode, isPending, isError } = useMutation({
    mutationKey: ['auth/changePassword'],
    mutationFn: ChangePasswordServices.verifyCode,
    onSuccess: (data) => {
      // Handle success
      console.log(data)
    },
    onError: (error) => {
      // Handle error
      console.log(error)
    }
  })

  return {
    verifyCode,
    isPending,
    isError,
  }

}