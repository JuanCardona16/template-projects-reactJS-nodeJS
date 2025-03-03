type Props = {
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string; // Optional prop for custom class names
  variant?: "primary" | "secondary" | "outline" | "default";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  width?: "auto" | "full";
};

const buttonStyles = {
  base: "base",
  variants: {
    default: "button",
    primary: "button--primary",
    secondary: "button--secondary",
    outline: "button--outline",
  },
  sizes: {
    small: "py-1 px-2 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg",
  },
  width: {
    full: "w-full",
    auto: "min-width",
  },
  disabled: "opacity-50 cursor-not-allowed",
};

export const Button: React.FC<Props> = ({
  type = "button",
  onClick,
  children,
  className,
  variant = "default",
  size = "medium",
  disabled = false,
  loading = false,
  width = "auto",
}) => {
  const baseStyles = buttonStyles.base;
  const variantStyles = buttonStyles.variants[variant];
  const sizeStyles = buttonStyles.sizes[size];
  const disabledStyles = disabled ? buttonStyles.disabled : "";
  const widthStyles = buttonStyles.width[width];

  const styles = `${baseStyles} ${variantStyles} ${sizeStyles} ${disabledStyles} ${widthStyles}`;

  return (
    <button
      type={type}
      onClick={disabled || loading ? undefined : onClick}
      className={className ? className : styles}
      disabled={disabled || loading}
    >
      {loading ? "Cargando..." : children}
    </button>
  );
};
