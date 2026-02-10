import { Container } from '@/src/elements/Container';
import { PrimaryButton } from '@/src/elements/PrimaryButton';
import { SecondaryButton } from '@/src/elements/SecondaryButton';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary-50 to-white dark:from-neutral-800 dark:to-neutral-900">
      <Container centered>
        <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white mb-6">
          Jarren Hurt:
          <br />
          <span className="text-primary-700 dark:text-primary-400">
            Fighting for Our Future.
          </span>
          <br />
          <span className="text-primary-700 dark:text-primary-400">
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
