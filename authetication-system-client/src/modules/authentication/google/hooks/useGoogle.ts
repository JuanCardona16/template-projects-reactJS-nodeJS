import { useAuthGoogleQuery } from '../queries'

export const useGoogle = () => {
  
  const loginWithGoogle = useAuthGoogleQuery();

  return {
    loginWithGoogle
  }

}
