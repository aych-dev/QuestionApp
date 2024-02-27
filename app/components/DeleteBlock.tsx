'use client';

import { useRouter } from 'next/navigation';

interface Props {
  id: string;
}

const DeleteBlock = ({ id }: Props) => {
  const router = useRouter();

  const deleteTicket = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        router.refresh();
      }
    } catch (error) {
      console.error('error');
    }
  };
  return (
    <p
      className='text-red-400 hover:cursor-pointer hover:text-red-200'
      onClick={deleteTicket}
    >
      Delete
    </p>
  );
};

export default DeleteBlock;
