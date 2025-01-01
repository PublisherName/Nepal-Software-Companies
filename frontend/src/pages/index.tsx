import {
  FiSearch,
  FiMail,
  FiPhone,
  FiGlobe,
  FiBriefcase,
  FiLinkedin,
  FiArrowLeft,
  FiArrowRight,
  FiGrid,
  FiList,
} from "react-icons/fi";

import HeroSection from "@/components/HeroSection";
export default function HomePage() {
  return (
    <main className='min-h-screen bg-gray-50'>
      <HeroSection />

      <div className='container mx-auto px-4 py-12'>
        {/* Search and Filters Header */}
        <div className='mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm'>
          <div className='flex flex-col gap-6'>
            {/* Search Bar */}
            <div className='relative'>
              <FiSearch className='absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' />
              <input
                type='search'
                placeholder='Search companies...'
                className='w-full rounded-xl border border-gray-200 px-12 py-4 text-lg shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            {/* Quick Filters */}
            <div className='flex flex-wrap items-center gap-3'>
              <span className='text-sm font-medium text-gray-500'>
                Quick Filters:
              </span>
              <button className='rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-100'>
                Tech Companies
              </button>
              <button className='rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100'>
                Startups
              </button>
              <button className='rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100'>
                Remote Jobs
              </button>
            </div>
          </div>
        </div>

        <div className='flex gap-8'>
          {/* Filters Sidebar */}
          <div className='hidden w-64 flex-shrink-0 lg:block'>
            <div className='sticky top-24 rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
              <div className='mb-6 flex items-center justify-between'>
                <h3 className='font-semibold text-gray-900'>Filters</h3>
                <button className='text-sm text-blue-600 hover:text-blue-700'>
                  Clear all
                </button>
              </div>
              {/* Add filter options here */}
            </div>
          </div>

          {/* Main Content */}
          <div className='flex-1'>
            {/* Controls */}
            <div className='mb-6 flex items-center justify-between'>
              <p className='text-sm text-gray-600'>
                Showing <span className='font-medium text-gray-900'>145</span>{" "}
                companies
              </p>
              <div className='flex items-center gap-4'>
                <select className='rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm'>
                  <option>Most Relevant</option>
                  <option>Newest First</option>
                  <option>Alphabetical</option>
                </select>
                <div className='flex items-center gap-2 rounded-lg border p-1'>
                  <button className='rounded p-2 text-blue-600 hover:bg-gray-100'>
                    <FiGrid className='h-5 w-5' />
                  </button>
                  <button className='rounded p-2 text-gray-400 hover:bg-gray-100'>
                    <FiList className='h-5 w-5' />
                  </button>
                </div>
              </div>
            </div>

            {/* Company Grid */}
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className='group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md'
                  >
                    <div className='flex items-start gap-4'>
                      <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 transition-transform group-hover:scale-110'>
                        <span className='text-2xl font-bold text-blue-500'>
                          C
                        </span>
                      </div>
                      <div className='min-w-0 flex-1'>
                        <h3 className='truncate text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600'>
                          Company Name
                        </h3>
                        <p className='mt-1 text-sm text-gray-500'>
                          123 Main St, Kathmandu
                        </p>

                        <div className='mt-4 space-y-2'>
                          <div className='flex items-center gap-2 text-sm text-gray-600'>
                            <FiMail className='h-4 w-4 text-gray-400' />
                            <a
                              href='mailto:contact@company.com'
                              className='truncate transition-colors hover:text-blue-500'
                            >
                              contact@company.com
                            </a>
                          </div>
                          <div className='flex items-center gap-2 text-sm text-gray-600'>
                            <FiPhone className='h-4 w-4 text-gray-400' />
                            <span>+977-1-4444444</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='mt-6 flex flex-wrap gap-2 border-t border-gray-100 pt-6'>
                      <a
                        href='#'
                        className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600'
                      >
                        <FiGlobe className='h-4 w-4' />
                        Website
                      </a>
                      <a
                        href='#'
                        className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600'
                      >
                        <FiBriefcase className='h-4 w-4' />
                        Careers
                      </a>
                      <a
                        href='#'
                        className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600'
                      >
                        <FiLinkedin className='h-4 w-4' />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                ))}
            </div>

            {/* Pagination */}
            <div className='mt-8 flex items-center justify-between border-t border-gray-200 pt-8'>
              <button className='flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-600'>
                <FiArrowLeft className='h-5 w-5' />
                Previous
              </button>
              <div className='flex items-center gap-2'>
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className='rounded-lg px-4 py-2 font-medium text-blue-600 hover:bg-blue-50'
                  >
                    {page}
                  </button>
                ))}
                <span className='px-4 py-2'>...</span>
                <button className='rounded-lg px-4 py-2 text-gray-600 hover:bg-blue-50'>
                  12
                </button>
              </div>
              <button className='flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-600'>
                Next
                <FiArrowRight className='h-5 w-5' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
