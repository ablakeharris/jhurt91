import { Container } from '@/src/elements/Container';
import { PrimaryButton } from '@/src/elements/PrimaryButton';
import { SecondaryButton } from '@/src/elements/SecondaryButton';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <Container centered>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Jarren Hurt:
          <br />
          <span className="text-blue-700 dark:text-blue-400">
            Fighting for Our Future.
          </span>
          <br />
          <span className="text-blue-700 dark:text-blue-400">
            Building Our Community.
          </span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <SecondaryButton size="lg">DONATE</SecondaryButton>
          <PrimaryButton size="lg">VOLUNTEER</PrimaryButton>
        </div>
      </Container>
    </section>
  );
};
