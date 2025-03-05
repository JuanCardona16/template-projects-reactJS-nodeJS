import { ChevronLeft } from "lucide-react";
import { Button, Label } from "../../../../components/shared";
import { useForm } from "../../../../hooks";
import { useChangePassword } from "../../../../modules/authentication/change-password";
import { useNavigate } from "react-router-dom";

type Props = {
  handleNextStep: (step: number) => void;
};

type FormChangePasswordData = {
  email: string;
};

export const Step1: React.FC<Props> = ({ handleNextStep }) => {
  const navigate = useNavigate();
  const { FormData, handleChange, handleSubmit } =
    useForm<FormChangePasswordData>({
      email: "",
    });

  const { sendCode } = useChangePassword();

  const handleOnSubmit = () => {
    const response = sendCode.sendCodeSecurity(FormData.email);
    response.then((data) => {
      console.log(data);
      if (data.success) return handleNextStep(1);
    });
  };

  const goBackStep = () => {
    navigate(-1)
  };

  return (
    <div className="bg-background-secondary p-4 rounded-md w-sm">
      <Button
        onClick={goBackStep}
        className="flex gap-1 justify-center items-cemter absolute top-20 left-20 cursor-pointer"
      >
        <ChevronLeft />
        Volver a atras
      </Button>
      <h2 className="text-2xl font-bold text-center mb-4">
        Cambiar contraseña
      </h2>
      <p className="mb-4 text-text-secondary">
        Ingresa tu correo electrónico y te enviaremos instrucciones para
        restablecer tu contraseña
      </p>
      <form
        method="POST"
        onSubmit={handleSubmit(handleOnSubmit)}
        className="flex flex-col gap-3"
      >
        <Label
          name="email"
          typeInput="email"
          id="email"
          label=""
          value={FormData.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
        />
        <Button type="submit" width="full" loading={sendCode.isPending}>
          Enviar codigo
        </Button>
      </form>
    </div>
  );
};
