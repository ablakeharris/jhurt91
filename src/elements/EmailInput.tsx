interface EmailInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const EmailInput = ({
  placeholder,
  className = '',
  ...props
}: EmailInputProps) => {
  return (
    <input
      type="email"
      placeholder={placeholder}
      className={`px-6 py-3 rounded-full text-neutral-900 flex-1 max-w-md ${className}`}
      {...props}
    />
  );
};
