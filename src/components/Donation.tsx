import { Container } from '@/src/elements/Container';
import { DonationButton } from '@/src/elements/DonationButton';
import { TertiaryButton } from '@/src/elements/TertiaryButton';

export const Donation = () => {
  const amounts = [10, 25, 50, 100, 250, 500];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <Container centered>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          DONATE TO JARREN HURT FOR STATE LEGISLATURE
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Every contribution helps us reach more voters and build a grassroots
          movement.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
          {amounts.map((amount) => (
            <DonationButton key={amount} amount={amount} />
          ))}
        </div>
        <TertiaryButton>OTHER AMOUNT</TertiaryButton>
      </Container>
    </section>
  );
};
