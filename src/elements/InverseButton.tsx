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
      className={`bg-white text-primary-700 hover:bg-neutral-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
