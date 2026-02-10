import { Container } from '@/src/elements/Container';
import { InverseButton } from '@/src/elements/InverseButton';
import { SecondaryButton } from '@/src/elements/SecondaryButton';

export const GetInvolved = () => {
  return (
    <section
      id="volunteer"
      className="py-20 px-4 bg-blue-700 dark:bg-blue-900 text-white"
    >
      <Container centered>
        <h2 className="text-4xl font-bold mb-6">GET INVOLVED</h2>
        <p className="text-xl mb-8">
          This campaign is powered by people like you. Join us in building a
          better future for our community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <InverseButton>VOLUNTEER</InverseButton>
          <SecondaryButton size="lg">DONATE</SecondaryButton>
        </div>
      </Container>
    </section>
  );
};
