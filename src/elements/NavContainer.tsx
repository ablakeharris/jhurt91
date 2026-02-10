interface NavContainerProps {
  children: React.ReactNode;
}

export const NavContainer = ({ children }: NavContainerProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  );
};
