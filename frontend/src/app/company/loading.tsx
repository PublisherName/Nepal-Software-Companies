export default function Loading() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50'>
      <div className='flex items-center space-x-2'>
        <div className='h-4 w-4 animate-pulse rounded-full bg-blue-500'></div>
        <div className='h-4 w-4 animate-pulse rounded-full bg-blue-500'></div>
        <div className='h-4 w-4 animate-pulse rounded-full bg-blue-500'></div>
      </div>
    </div>
  );
}
