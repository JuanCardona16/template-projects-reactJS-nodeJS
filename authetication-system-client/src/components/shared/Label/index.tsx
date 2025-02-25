type Props = {
  id: string;
  name: string;
  label: string;
  typeInput?: string;
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  rightIconOnClick?: () => void;
  autoComplete?: "off" | "on";
  className?: string;
  variant?: "default";
  size?: "small" | "medium" | "large";
  width?: "auto" | "full";
};

const labelStyles = {
  variants: {
    default:
      "appearance-none w-full focus:outline-none focus:shadow-outline bg-transparent text-sm",
  },
  sizes: {
    small: "py-2 px-3 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg",
  },
  width: {
    full: "w-full",
    auto: "w-auto",
  },
};

export const Label: React.FC<Props> = ({
  id,
  name,
  label,
  typeInput = "text",
  placeholder = "",
  value = "",
  onChange,
  error,
  icon,
  rightIcon,
  rightIconOnClick,
  autoComplete = "off",
  variant = "default",
  className,
  width = "auto",
}) => {
  const variantStyles = labelStyles.variants[variant];
  const widthStyles = labelStyles.width[width];

  const styles = `${variantStyles} ${widthStyles}`;

  return (
    <>
      <label htmlFor={id}>
        <h4 className="mb-2 text-sm">{label}</h4>
        <div className={`border rounded-md flex gap-2 py-2 px-3`}>
          {icon}
          <input
            type={typeInput}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            className={className ? className : styles}
          />
          {rightIcon && (
            <button
              type="button"
              onClick={rightIconOnClick}
              className="flex-shrink-0 cursor-pointer"
            >
              {rightIcon}
            </button>
          )}
        </div>
      </label>
      {error && (
        <span className="text-red-400 text-xs animate-pulse">{error}</span>
      )}
    </>
  );
};
