import Image from 'next/image';

export const Logo = () => {
  return (
    <div className='mt-2 lg:static'>
      <a href='#'>
        <span className='sr-only'>Workflow</span>
        <Image
          width={'32px'}
          height={'32px'}
          src='https://tailwindui.com/img/logos/workflow-mark-green-300.svg'
          alt='Workflow'
        />
      </a>
    </div>
  );
};
