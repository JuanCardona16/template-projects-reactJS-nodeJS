type Props = {
  type?: "submit" | "reset" | "button";
  onClick: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({
  type = "button",
  onClick,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="py-2 px-4 bg-gray-900 rounded-md cursor-pointer border-2 border-transparent hover:border-blue-500 hover:border-2"
    >
      {children}
    </button>
  );
};
