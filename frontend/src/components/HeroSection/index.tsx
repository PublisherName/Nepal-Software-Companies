import { FiBriefcase, FiMap, FiUsers, FiSearch } from "react-icons/fi";

const stats = [
  {
    icon: FiBriefcase,
    label: "Companies",
    value: "500+",
    color: "blue",
  },
  {
    icon: FiBriefcase,
    label: "Active Jobs",
    value: "1,200+",
    color: "green",
  },
  {
    icon: FiMap,
    label: "Cities",
    value: "50+",
    color: "purple",
  },
  {
    icon: FiUsers,
    label: "Employees",
    value: "25,000+",
    color: "orange",
  },
];

export default function HeroSection() {
  return (
    <div className='relative overflow-hidden bg-gray-50 pt-20'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-50 to-white' />

      <div className='relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-16 max-w-3xl space-y-8 text-center'>
          <h1 className='animate-fade-in text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Discover Software Companies
          </h1>
          <p className='mx-auto max-w-2xl text-xl text-gray-600'>
            Your comprehensive directory of software companies in Nepal. Connect
            with the tech community.
          </p>

          {/* Search Bar */}
          <div className='mx-auto mt-8 max-w-2xl'>
            <div className='relative'>
              <FiSearch className='absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' />
              <input
                type='search'
                placeholder='Search companies...'
                className='w-full rounded-full border border-gray-200 py-4 pl-12 pr-4 text-lg shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className='mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='rounded-2xl bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md'
            >
              <div className='flex flex-col items-center space-y-2 text-center'>
                <div className={`rounded-xl p-3 bg-${stat.color}-50`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-500`} />
                </div>
                <h3 className='text-3xl font-bold text-gray-900'>
                  {stat.value}
                </h3>
                <p className='text-sm font-medium text-gray-500'>
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
