import { Container } from '@/src/elements/Container';
import { PrimaryButton } from '@/src/elements/PrimaryButton';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <Container width="wide">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              MEET JARREN
            </h2>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <p>
                Jarren Hurt is a public school teacher, community organizer, and
                Democratic candidate running for State Legislature, committed to
                ensuring every family has access to quality education,
                affordable healthcare, and economic opportunity.
              </p>
              <p>
                Born and raised in our community, Jarren has spent the last
                decade working with students and families, witnessing firsthand
                the challenges working families face. From underfunded schools
                to rising housing costs, Jarren knows we need leaders who will
                fight for real solutions.
              </p>
              <p>
                This campaign is about putting people over politics and building
                a future where everyone has a fair shot at success.
              </p>
            </div>
            <PrimaryButton className="mt-8">Learn More</PrimaryButton>
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg aspect-square flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400 text-lg">
              Candidate Photo
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
