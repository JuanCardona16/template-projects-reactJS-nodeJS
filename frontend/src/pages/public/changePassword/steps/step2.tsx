import { ChevronLeft } from "lucide-react";
import { Button, Label } from "../../../../components/shared";
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
      if (data.success) return handleNextStep(2);
    });
  };

  const goBackStep = () => {
    handleNextStep(0);
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
      <h2 className="text-2xl font-bold text-center mb-4">Verificar codigo</h2>
      <p className="mb-4 text-text-secondary">
        Introdusca el codigo de verificacion que le hemos enviado al correo que
        digito anteriormente
      </p>
      <form
        method="POST"
        onSubmit={handleSubmit(handleOnSubmit)}
        className="flex flex-col gap-3"
      >
        <Label
          name="code"
          typeInput="text"
          id="code"
          label=""
          value={FormData.code}
          onChange={handleChange}
          placeholder="Codigo"
        />
        <Button type="submit" width="full" loading={verify.isPending}>
          Verificar codigo
        </Button>
      </form>
    </div>
  );
};
