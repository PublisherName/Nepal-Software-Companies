import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  return (
    <main className='min-h-screen bg-gray-50'>
      <HeroSection />

      <div className='container mx-auto px-4 py-12'>
        {/* Welcome Section */}
        <div className='mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm'>
          <h2 className='text-2xl font-bold text-gray-900'>
            Welcome to Our Website
          </h2>
          <p className='mt-4 text-gray-600'>
            Discover the best content and resources to help you succeed. Explore
            our features and services.
          </p>
        </div>

        {/* Features Section */}
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
          <div className='rounded-xl border border-gray-100 bg-white p-6 shadow-sm'>
            <h3 className='text-lg font-semibold text-gray-900'>Feature One</h3>
            <p className='mt-2 text-gray-600'>
              Learn more about our first feature and how it can benefit you.
            </p>
          </div>
          <div className='rounded-xl border border-gray-100 bg-white p-6 shadow-sm'>
            <h3 className='text-lg font-semibold text-gray-900'>Feature Two</h3>
            <p className='mt-2 text-gray-600'>
              Discover the advantages of our second feature and how it can help
              you.
            </p>
          </div>
          <div className='rounded-xl border border-gray-100 bg-white p-6 shadow-sm'>
            <h3 className='text-lg font-semibold text-gray-900'>
              Feature Three
            </h3>
            <p className='mt-2 text-gray-600'>
              Explore the benefits of our third feature and how it can improve
              your experience.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className='mt-12 text-center'>
          <h2 className='text-2xl font-bold text-gray-900'>
            Get Started Today
          </h2>
          <p className='mt-4 text-gray-600'>
            Join us and take advantage of all the features and services we
            offer.
          </p>
          <button className='mt-6 rounded-full bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700'>
            Sign Up Now
          </button>
        </div>
      </div>
    </main>
  );
}
