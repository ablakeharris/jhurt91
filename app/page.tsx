export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-blue-700 dark:bg-blue-900 text-white z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold">JARREN HURT</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-200 transition-colors">About</a>
              <a href="#issues" className="hover:text-blue-200 transition-colors">Issues</a>
              <a href="#volunteer" className="hover:text-blue-200 transition-colors">Get Involved</a>
            </div>
            <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-semibold transition-colors">
              DONATE
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Jarren Hurt:
            <br />
            <span className="text-blue-700 dark:text-blue-400">Fighting for Our Future.</span>
            <br />
            <span className="text-blue-700 dark:text-blue-400">Building Our Community.</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              DONATE
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              VOLUNTEER
            </button>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-16 px-4 bg-blue-700 dark:bg-blue-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">STAY UP TO DATE ON THE CAMPAIGN</h2>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full text-gray-900 flex-1 max-w-md"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              SIGN UP
            </button>
          </form>
          <p className="text-sm mt-4 text-blue-100">
            By signing up, you agree to receive campaign updates and event invitations.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                MEET JARREN
              </h2>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <p>
                  Jarren Hurt is a public school teacher, community organizer, and Democratic candidate 
                  running for State Legislature, committed to ensuring every family has access to quality 
                  education, affordable healthcare, and economic opportunity.
                </p>
                <p>
                  Born and raised in our community, Jarren has spent the last decade working with students 
                  and families, witnessing firsthand the challenges working families face. From underfunded 
                  schools to rising housing costs, Jarren knows we need leaders who will fight for real solutions.
                </p>
                <p>
                  This campaign is about putting people over politics and building a future where everyone 
                  has a fair shot at success.
                </p>
              </div>
              <button className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Learn More
              </button>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg aspect-square flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-lg">Candidate Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            DONATE TO JARREN HURT FOR STATE LEGISLATURE
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Every contribution helps us reach more voters and build a grassroots movement.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[10, 25, 50, 100, 250, 500].map((amount) => (
              <button
                key={amount}
                className="bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-lg text-xl font-semibold transition-colors"
              >
                ${amount}
              </button>
            ))}
          </div>
          <button className="mt-6 bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            OTHER AMOUNT
          </button>
        </div>
      </section>

      {/* Issues Section */}
      <section id="issues" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            WHERE I STAND
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-700 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Education First
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our children deserve fully funded schools with smaller class sizes, competitive teacher 
                salaries, and modern resources. I&apos;ll fight to increase education funding and ensure every 
                student has the opportunity to succeed, regardless of their zip code.
              </p>
            </div>
            <div className="border-l-4 border-blue-700 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Affordable Healthcare
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Healthcare is a right, not a privilege. I support expanding Medicaid, lowering prescription 
                drug costs, and protecting coverage for pre-existing conditions. No family should go bankrupt 
                because of medical bills.
              </p>
            </div>
            <div className="border-l-4 border-blue-700 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Economic Opportunity
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Working families are struggling with rising costs while wages stagnate. I&apos;ll advocate for 
                raising the minimum wage, supporting small businesses, and investing in job training programs 
                that prepare workers for the economy of tomorrow.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Learn More About My Platform
            </button>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="volunteer" className="py-20 px-4 bg-blue-700 dark:bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">GET INVOLVED</h2>
          <p className="text-xl mb-8">
            This campaign is powered by people like you. Join us in building a better future for our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              VOLUNTEER
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              DONATE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-semibold text-white mb-4">JARREN HURT FOR STATE LEGISLATURE</p>
          <p className="mb-4">Paid for by Jarren Hurt for State Legislature</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
