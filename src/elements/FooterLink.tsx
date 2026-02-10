interface FooterLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const FooterLink = ({
  children,
  className = '',
  ...props
}: FooterLinkProps) => {
  return (
    <a className={`hover:text-white transition-colors ${className}`} {...props}>
      {children}
    </a>
  );
};
