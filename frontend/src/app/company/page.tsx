import { FiSearch, FiGrid, FiList } from "react-icons/fi";

import CompanyCard from "@/components/CompanyCard";
import {
  CompanyAPIResponseInterface,
  CompanyInterface,
} from "@/interfaces/company";

import Pagination from "@/components/Pagination";

interface HomePageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const {
    page = "1",
    ordering = "name",
    name = "",
    city = "",
    search = "",
  } = await searchParams;

  const apiUrl = new URL(`${process.env.NEXT_PUBLIC_API_URL}/companies/`);
  const params = { page, ordering, name, city, search };

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      apiUrl.searchParams.append(key, Array.isArray(value) ? value[0] : value);
    }
  });

  const res = await fetch(apiUrl.toString(), { cache: "no-store" });
  const data: CompanyAPIResponseInterface = await res.json();

  const companies: CompanyInterface[] = data.results;
  const currentPage = parseInt(page as string, 10);

  return (
    <main className='min-h-screen bg-gray-50 py-12'>
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
                Kathmandu
              </button>
              <button className='rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100'>
                Bhaktapur
              </button>
              <button className='rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100'>
                Lalitpur
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-8 lg:flex-row'>
          {/* Filters Sidebar */}
          <div className='w-full flex-shrink-0 lg:w-64'>
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
            <div className='mb-6 flex flex-col items-center justify-between md:flex-row'>
              <p className='text-sm text-gray-600'>
                Showing{" "}
                <span className='font-medium text-gray-900'>{data.count}</span>{" "}
                companies
              </p>
              <div className='mt-4 flex items-center gap-4 md:mt-0'>
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
            <CompanyCard companies={companies} />

            {/* Pagination */}
            <Pagination currentPage={currentPage} totalRecord={data.count} />
          </div>
        </div>
      </div>
    </main>
  );
}
