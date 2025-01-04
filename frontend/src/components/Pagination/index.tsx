import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface PaginationProps {
  currentPage: number;
  totalRecord: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalRecord,
}) => {
  const totalPages = Math.ceil(
    totalRecord / parseInt(process.env.NEXT_PUBLIC_PAGINATION_COUNT || "0", 10),
  );
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <div className='mt-8 flex flex-col items-center justify-between border-t border-gray-200 pt-8 md:flex-row'>
      {prevPage ? (
        <Link
          href={`?page=${prevPage}`}
          className='flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-600'
        >
          <FiArrowLeft className='h-5 w-5' />
          Previous
        </Link>
      ) : (
        <button
          disabled
          className='flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-gray-400'
        >
          <FiArrowLeft className='h-5 w-5' />
          Previous
        </button>
      )}
      <div className='mt-4 flex items-center gap-2 md:mt-0'>
        {currentPage > 1 && (
          <Link
            href={`?page=1`}
            className='rounded-lg px-4 py-2 text-gray-600 hover:bg-blue-50'
          >
            1
          </Link>
        )}
        {currentPage > 3 && <span className='px-4 py-2'>...</span>}
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          if (
            page === currentPage ||
            (page >= currentPage - 1 && page <= currentPage + 1)
          ) {
            return (
              <Link
                key={page}
                href={`?page=${page}`}
                className={`rounded-lg px-4 py-2 font-medium ${page === currentPage ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-blue-50"}`}
              >
                {page}
              </Link>
            );
          }
          return null;
        })}
        {currentPage < totalPages - 2 && <span className='px-4 py-2'>...</span>}
        {currentPage < totalPages &&
          currentPage !== totalPages &&
          currentPage !== totalPages - 1 && (
            <Link
              href={`?page=${totalPages}`}
              className='rounded-lg px-4 py-2 text-gray-600 hover:bg-blue-50'
            >
              {totalPages}
            </Link>
          )}
      </div>
      {nextPage ? (
        <Link
          href={`?page=${nextPage}`}
          className='flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-600'
        >
          Next
          <FiArrowRight className='h-5 w-5' />
        </Link>
      ) : (
        <button
          disabled
          className='flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-gray-400'
        >
          Next
          <FiArrowRight className='h-5 w-5' />
        </button>
      )}
    </div>
  );
};

export default Pagination;
