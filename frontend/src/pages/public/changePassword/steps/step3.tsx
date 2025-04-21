import { useNavigate } from "react-router-dom";
import { useForm } from "../../../../hooks";
import { useChangePassword } from "../../../../modules/authentication/change-password";
import { Button, Label } from "../../../../components/shared";
import { Eye, EyeOff } from "lucide-react";

type FormChangePasswordData = {
  password: string;
};

export const Step3: React.FC = () => {
  const navigate = useNavigate();
  const {
    FormData,
    handleChange,
    handleSubmit,
    toogleVisiblePassword,
    IsVisiblePassword,
    FormDataError,
  } = useForm<FormChangePasswordData>({
    password: "",
  });

  const { reset } = useChangePassword();

  const handleOnSubmit = () => {
    const response = reset.changePassword(FormData.password);
    response.then((data) => {
      console.log(data);
      if (data.success) {
        navigate("/login", { replace: true });
      }
    });
  };


  return (
    <div className="bg-background-secondary p-4 rounded-md w-sm">
      <h1 className="text-2xl font-bold text-center mb-4">
        Actualizar contraseña
      </h1>
      <p className="mb-4 text-text-secondary">Introdusca su nueva contraseña</p>
      <form
        method="PUT"
        onSubmit={handleSubmit(handleOnSubmit)}
        className="flex flex-col gap-3"
      >
        <Label
          id="password"
          name="password"
          label="Contraseña:"
          typeInput={IsVisiblePassword === true ? "text" : "password"}
          value={FormData.password}
          onChange={handleChange}
          error={FormDataError.password}
          rightIcon={IsVisiblePassword ? <Eye /> : <EyeOff />}
          rightIconOnClick={toogleVisiblePassword}
        />
        <Button type="submit" width="full" loading={reset.isPending}>
          Actualizar contraseña
        </Button>
      </form>
    </div>
  );
};
