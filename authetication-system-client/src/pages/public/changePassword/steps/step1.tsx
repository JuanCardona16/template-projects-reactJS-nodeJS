import { useForm } from "../../../../hooks";
import { useChangePassword } from "../../../../modules/authentication/change-password";

type Props = {
  handleNextStep: (step: number) => void;
};

type FormChangePasswordData = {
  email: string;
};

export const Step1: React.FC<Props> = ({ handleNextStep }) => {
  const { FormData, handleChange, handleSubmit } =
    useForm<FormChangePasswordData>({
      email: "",
    });

  const { sendCode } = useChangePassword();

  const handleOnSubmit = () => {
    const response = sendCode.sendCodeSecurity(FormData.email);
    response.then((data) => {
      console.log(data)
      if (data.success) return handleNextStep(1);
    });
  };

  return (
    <div className="bg-background-secondary p-4 rounded-md w-xl">
      <h2 className="text-2xl font-bold text-center mb-4">Cambiar contraseña</h2>
      <p className="mb-4 text-text-secondary">Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña</p>
      <form method="POST" onSubmit={handleSubmit(handleOnSubmit)}>
        <input
          type="email"
          name="email"
          value={FormData.email}
          onChange={handleChange}
          style={{
            padding: "10px",
            marginTop: "10px",
          }}
          placeholder="Correo electronico"
        />
        <button type="submit">{ sendCode.isPending ? "Cargando..." : "Enviar codigo" }</button>
      </form>
    </div>
  );
};
