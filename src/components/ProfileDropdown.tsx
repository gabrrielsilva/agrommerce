import { Menu, Transition } from '@headlessui/react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { Fragment } from 'react';

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Sign out', href: '#', event: () => signOut({ redirect: true, callbackUrl: '/' }) },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const ProfileDropdown = () => {
  const { data } = useSession();

  return (
    <>
      <Menu as='div' className='hidden ml-4 relative flex-shrink-0 lg:flex'>
        <div>
          <Menu.Button className='bg-white rounded-full flex text-sm focus:outline-none'>
            <span className='sr-only'>Open user menu</span>
            <figure className='h-8 w-8 rounded-full'>
              <Image className='rounded-full' src={data?.user.image} alt='' layout='fill' />
            </figure>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='origin-top-right z-40 absolute -right-2 mt-10 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
            {userNavigation.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <button
                    onClick={item?.event}
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}
                  >
                    {item.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>

      <div className='mt-3 px-2 space-y-1 lg:hidden'>
        {userNavigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={item?.event}
            className='block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800'
          >
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
};
