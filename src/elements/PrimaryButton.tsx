interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const PrimaryButton = ({
  children,
  size = 'md',
  className = '',
  ...props
}: PrimaryButtonProps) => {
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`bg-primary-700 hover:bg-primary-800 text-white rounded-full font-semibold transition-colors ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
