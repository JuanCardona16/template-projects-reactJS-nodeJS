import { useForm } from "../../../../hooks";
import { useChangePassword } from "../../../../modules/authentication/change-password";

type Props = {
  handleNextStep: (step: number) => void;
};

type FormChangePasswordData = {
  code: string;
};

export const Step2: React.FC<Props> = ({ handleNextStep }) => {
  const { FormData, handleChange, handleSubmit } =
    useForm<FormChangePasswordData>({
      code: "",
    });

  const { verify } = useChangePassword();

  const handleOnSubmit = () => {
    const response = verify.verifyCode(FormData.code);
    response.then((data) => {
      if (data.data.success) return handleNextStep(2);
    });
  };

  return (
    <div>
      <h1>Verificar codigo</h1>
      <p>Introdusca el codigo de verificacion que le hemos enviado al correo que digito anteriormente</p>
      <form method="POST" onSubmit={handleSubmit(handleOnSubmit)}>
        <input
          type="text"
          name="code"
          value={FormData.code}
          onChange={handleChange}
          style={{
            padding: "10px",
            marginTop: "10px",
          }}
          placeholder="Codigo"
        />
        <button type="submit">{verify.isPending ? "Cargando..." : "Verificar codigo"}</button>
      </form>
    </div>
  );
};
