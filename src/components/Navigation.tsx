export const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Profile', href: '#', current: false },
  { name: 'Resources', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Navigation = () => {
  return (
    <nav className='flex space-x-4'>
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current ? 'text-white' : 'text-green-100',
            'text-[16px] rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};
