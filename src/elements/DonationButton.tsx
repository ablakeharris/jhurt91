interface DonationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  amount: number;
}

export const DonationButton = ({
  amount,
  className = '',
  ...props
}: DonationButtonProps) => {
  return (
    <button
      className={`bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-lg text-xl font-semibold transition-colors w-full ${className}`}
      {...props}
    >
      ${amount}
    </button>
  );
};
