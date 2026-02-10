interface TertiaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const TertiaryButton = ({
  children,
  className = '',
  ...props
}: TertiaryButtonProps) => {
  return (
    <button
      className={`bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
