import { Popover, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, SearchIcon, XIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { Fragment } from 'react';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { navigation, Navigation } from '../../components/Navigation';
import { ProfileDropdown } from '../../components/ProfileDropdown';
import { Search } from '../../components/Search';

export default function Dashboard() {
  const { data } = useSession();

  return (
    <>
      <div className='h-screen flex flex-col justify-between bg-gray-100'>
        <Popover as='header' className='pb-24 bg-green-900'>
          {({ open }) => (
            <>
              <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                <div className='relative py-5 flex items-center justify-center lg:justify-between'>
                  <Logo />

                  {/* Right section on desktop */}
                  <div className='hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5'>
                    <button
                      type='button'
                      className='flex-shrink-0 p-1 text-green-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white'
                    >
                      <span className='sr-only'>View notifications</span>
                      <BellIcon className='h-6 w-6' aria-hidden='true' />
                    </button>

                    <ProfileDropdown />
                  </div>

                  <Search />

                  {/* Menu button */}
                  <div className='absolute right-0 flex-shrink-0 lg:hidden'>
                    {/* Mobile menu button */}
                    <Popover.Button className='bg-transparent p-2 rounded-md inline-flex items-center justify-center text-green-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                      ) : (
                        <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                      )}
                    </Popover.Button>
                  </div>
                </div>

                <div className='hidden lg:block border-t border-white border-opacity-20 py-5'>
                  <div className='grid grid-cols-3 gap-8 items-center'>
                    <div className='col-span-2'>
                      <Navigation />
                    </div>
                    <div className='max-w-md w-full mx-auto'>
                      <label htmlFor='mobile-search' className='sr-only'>
                        Search
                      </label>
                      <div className='relative text-white focus-within:text-gray-600'>
                        <div className='pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center'>
                          <SearchIcon className='h-5 w-5' aria-hidden='true' />
                        </div>
                        <input
                          id='mobile-search'
                          className='block w-full bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm'
                          placeholder='Search'
                          type='search'
                          name='search'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Transition.Root as={Fragment}>
                <div className='lg:hidden'>
                  <Transition.Child
                    as={Fragment}
                    enter='duration-150 ease-out'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='duration-150 ease-in'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <Popover.Overlay className='z-20 fixed inset-0 bg-black bg-opacity-25' />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter='duration-150 ease-out'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='duration-150 ease-in'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                  >
                    <Popover.Panel
                      focus
                      className='z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top'
                    >
                      <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200'>
                        <div className='pt-3 pb-2'>
                          <div className='flex items-center justify-between px-4'>
                            <Logo />

                            <div className='-mr-2'>
                              <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500'>
                                <span className='sr-only'>Close menu</span>
                                <XIcon className='h-6 w-6' aria-hidden='true' />
                              </Popover.Button>
                            </div>
                          </div>
                          <div className='mt-3 px-2 space-y-1'>
                            {navigation.map((page) => (
                              <a
                                key={page.name}
                                href={page.href}
                                className='block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800'
                              >
                                {page.name}
                              </a>
                            ))}
                          </div>
                        </div>
                        <div className='pt-4 pb-2'>
                          <div className='flex items-center px-5'>
                            <div className='flex-shrink-0'>
                              <figure className='relative h-10 w-10 rounded-full'>
                                <Image
                                  className='rounded-full'
                                  src={data?.user?.image}
                                  alt=''
                                  layout='fill'
                                />
                              </figure>
                            </div>
                            <div className='ml-3 min-w-0 flex-1'>
                              <div className='text-base font-medium text-gray-800 truncate'>
                                {data?.user?.name}
                              </div>
                              <div className='text-sm font-medium text-gray-500 truncate'>
                                {data?.user?.email}
                              </div>
                            </div>
                            <button
                              type='button'
                              className='ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                            >
                              <span className='sr-only'>View notifications</span>
                              <BellIcon className='h-6 w-6' aria-hidden='true' />
                            </button>
                          </div>

                          <ProfileDropdown />
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition.Child>
                </div>
              </Transition.Root>
            </>
          )}
        </Popover>

        <main className='h-full -mt-24 pb-8'>
          <div className='h-full max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
            <h1 className='sr-only'>Page title</h1>
            {/* Main 3 column grid */}
            <div className='h-full grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8'>
              {/* Left column */}
              <div className='h-full grid grid-cols-1 gap-4 lg:col-span-2'>
                <section aria-labelledby='section-1-title'>
                  <h2 className='sr-only' id='section-1-title'>
                    Section title
                  </h2>
                  <div className='h-full rounded-lg bg-white overflow-hidden shadow'>
                    <div className='p-6'>
                      <h1 className='text-xl font-foundersGrotesk'>O que deseja plantar?</h1>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right column */}
              <div className='h-full grid grid-cols-1 gap-4'>
                <section aria-labelledby='section-2-title'>
                  <h2 className='sr-only' id='section-2-title'>
                    Section title
                  </h2>
                  <div className='h-full rounded-lg bg-white overflow-hidden shadow'>
                    <div className='p-6'>{/* Your content */}</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
