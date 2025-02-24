import { useState } from "react";

export const useForm = <T extends Record<string, any>>(initialData: T) => {
  const [FormData, setFormData] = useState<T>(initialData);
  const [FormDataError, setFormDataError] = useState<
    Partial<Record<keyof T, string>>
  >({});
  const [IsVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);

  // Función para manejar cambios en los inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Actualiza el campo correspondiente usando el nombre del input
    }));
  };

  const handleSubmit =
    (onSubmit: () => Promise<unknown> | unknown) =>
    async (event: React.FormEvent) => {
      event.preventDefault();

      const validateErrors = validateForm(FormData);

      if (Object.keys(validateErrors).length > 0) {
        setFormDataError(validateErrors);
        setTimeout(() => {
          setFormDataError({});
        }, 10000);
        return;
      } else {
        await onSubmit();
        resetFormData();
        setFormDataError({});
      }
    };

  const resetFormData = () => {
    setFormData(initialData);
  };

  const toogleVisiblePassword = () => {
    setIsVisiblePassword(!IsVisiblePassword);
  };

  const validateForm = (formData: T) => {
    const errors: Partial<Record<keyof T, string>> = {};

    Object.keys(formData).forEach((fieldName) => {
      if (!formData[fieldName]) {
        (errors as any)[fieldName] = "Este campo es obligatorio";
      }

      if (fieldName === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[fieldName])) {
          (errors as any)[fieldName] = "El email no es válido";
        }
      }

      if (fieldName === "password") {
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%"*?&])[A-Za-z\d@$!"#%*?&]{8,14}$/;
        if (!passwordRegex.test(formData[fieldName])) {
          (errors as any)[fieldName] =
            "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial";
        }
      }
    });

    return errors;
  };

  return {
    FormData,
    IsVisiblePassword,
    FormDataError,
    handleChange,
    // resetFormData,
    toogleVisiblePassword,
    handleSubmit,
  };
};
