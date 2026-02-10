import { Container } from '@/src/elements/Container';
import { FooterLink } from '@/src/elements/FooterLink';

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12 px-4">
      <Container width="wide" centered>
        <p className="text-lg font-semibold text-white mb-4">
          JARREN HURT FOR STATE LEGISLATURE
        </p>
        <p className="mb-4">Paid for by Jarren Hurt for State Legislature</p>
        <div className="flex justify-center space-x-6 text-sm">
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </div>
      </Container>
    </footer>
  );
};
