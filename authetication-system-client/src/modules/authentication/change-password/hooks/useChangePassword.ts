import { useSendCodeSecurity, useVerifyCodeSecurity } from "../queries"

export const useChangePassword = () => {

  const sendCode = useSendCodeSecurity();
  const verify = useVerifyCodeSecurity();

  return {
    sendCode,
    verify,
  }

}