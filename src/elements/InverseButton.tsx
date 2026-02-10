interface InverseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const InverseButton = ({
  children,
  className = '',
  ...props
}: InverseButtonProps) => {
  return (
    <button
      className={`bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
