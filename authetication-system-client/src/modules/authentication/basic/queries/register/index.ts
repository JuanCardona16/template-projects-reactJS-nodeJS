import { useMutation } from '@tanstack/react-query'
import AuthenticationServices from "../../services/auth.service";
import { useSesionStorage } from '../../../../../hooks';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
  const navigate = useNavigate();
  const { setStorageData } = useSesionStorage();
  
  const { mutateAsync: createAccount, isPending, isError, error } = useMutation({
    mutationKey: ['auth/register'],
    mutationFn: AuthenticationServices.register,
    onSuccess: (data) => {
      if (data) {
        setStorageData("access_token", data.data)
        navigate("/")
      }

      console.log(data)
    },
    onError: (error) => {
      alert('Error al registrar. Verifica los datos ingresados.' + error)
    },
  })

  return {
    createAccount,
    isPending,
    isError,
    error,
  }

}
