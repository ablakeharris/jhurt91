import { Container } from '@/src/elements/Container';
import { SecondaryButton } from '@/src/elements/SecondaryButton';
import { EmailInput } from '@/src/elements/EmailInput';

export const EmailSignup = () => {
  return (
    <section className="py-16 px-4 bg-blue-700 dark:bg-blue-900 text-white">
      <Container width="narrow" centered>
        <h2 className="text-3xl font-bold mb-6">
          STAY UP TO DATE ON THE CAMPAIGN
        </h2>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <EmailInput placeholder="Enter your email" />
          <SecondaryButton type="submit">SIGN UP</SecondaryButton>
        </form>
        <p className="text-sm mt-4 text-blue-100">
          By signing up, you agree to receive campaign updates and event
          invitations.
        </p>
      </Container>
    </section>
  );
};
