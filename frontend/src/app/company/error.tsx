"use client";

import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<ErrorProps> = ({ error, reset }) => {
  const router = useRouter();

  return (
    <main className='flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 pt-16'>
      <div className='container mx-auto px-4 py-12 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center rounded-lg bg-white p-8 shadow-lg sm:p-10 lg:p-12'>
          <FiAlertCircle className='animate-pulse text-6xl text-red-600' />
          <h1 className='mt-4 text-center text-3xl font-bold text-red-600'>
            Oops! Something went wrong.
          </h1>
          <p className='mt-2 text-center text-gray-600'>{error.message}</p>
          <p className='mt-2 text-center text-gray-600'>
            Please try the following steps:
          </p>
          <ul className='mt-4 list-inside list-disc text-left text-gray-600'>
            <li>Check your internet connection.</li>
            <li>Refresh the page.</li>
            <li>Clear your browser cache.</li>
            <li>Contact support if the issue persists.</li>
          </ul>
          <div className='mt-6 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'>
            <button
              onClick={reset}
              className='transform rounded-full bg-blue-600 px-6 py-3 text-white transition-transform hover:scale-105 hover:bg-blue-700'
            >
              Try Again
            </button>
            <button
              onClick={() => router.push("/")}
              className='transform rounded-full bg-gray-600 px-6 py-3 text-white transition-transform hover:scale-105 hover:bg-gray-700'
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
