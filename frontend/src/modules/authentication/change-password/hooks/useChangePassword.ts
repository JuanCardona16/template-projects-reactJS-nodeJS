import { useSendCodeSecurity, useVerifyCodeSecurity, useResetPassword } from "../queries"

export const useChangePassword = () => {

  const sendCode = useSendCodeSecurity();
  const verify = useVerifyCodeSecurity();
  const reset = useResetPassword();

  return {
    sendCode,
    verify,
    reset
  }

}