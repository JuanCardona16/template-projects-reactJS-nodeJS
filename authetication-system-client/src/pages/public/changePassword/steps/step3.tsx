import { useNavigate } from "react-router-dom";
import { useForm } from "../../../../hooks";
import { useChangePassword } from "../../../../modules/authentication/change-password";

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
    <div>
      <h1>Actualizar contraseña</h1>
      <p>Introdusca su nueva contraseña</p>
      <form method="PUT" onSubmit={handleSubmit(handleOnSubmit)}>
        <label htmlFor="password">
          <h4>Contraseña: </h4>
          <input
            type={IsVisiblePassword === true ? "text" : "password"}
            id="password"
            name="password"
            value={FormData.password}
            onChange={handleChange}
            style={{
              padding: "10px",
              marginTop: "10px",
            }}
          />
          <button type="button" onClick={toogleVisiblePassword}>
            Ver contraseña
          </button>
        </label>
        <span>{FormDataError.password}</span>
        <button type="submit">Actualizar contraseña</button>
      </form>
    </div>
  );
};
