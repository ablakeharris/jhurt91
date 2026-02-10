interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const NavLink = ({
  children,
  className = '',
  ...props
}: NavLinkProps) => {
  return (
    <a
      className={`hover:text-blue-200 transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};
