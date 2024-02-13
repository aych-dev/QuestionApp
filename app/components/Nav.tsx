import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='flex justify-between p-2 bg-gray-200'>
      <div className='flex items-center space-x-4'>
        <Link className='cursor-pointer' href={'/'}>
          HOME
        </Link>
        <Link className='cursor-pointer' href={'/TicketPage/new'}>
          NEW
        </Link>
      </div>
      <div>
        <p className='mr-4'>EMAIL</p>
      </div>
    </nav>
  );
};

export default Nav;
