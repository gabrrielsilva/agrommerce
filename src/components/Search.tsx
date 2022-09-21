import { SearchIcon } from '@heroicons/react/outline';

export const Search = () => {
  return (
    <>
      <div className='flex-1 min-w-0 pl-5 pr-12 lg:hidden'>
        <div className='max-w-xs w-full mx-auto'>
          <label htmlFor='desktop-search' className='sr-only'>
            Search
          </label>
          <div className='relative text-white focus-within:text-gray-600'>
            <div className='pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center'>
              <SearchIcon className='h-5 w-5' aria-hidden='true' />
            </div>
            <input
              id='desktop-search'
              className='block w-full bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm'
              placeholder='Search'
              type='search'
              name='search'
            />
          </div>
        </div>
      </div>
    </>
  );
};
