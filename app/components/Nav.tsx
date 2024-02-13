import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <div>
        <Link href={'/'}>HOME</Link>
        <Link href={'/TicketPage/new'}>NEW</Link>
      </div>
    </nav>
  );
};

export default Nav;
