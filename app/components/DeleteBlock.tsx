'use client';

import { useRouter } from 'next/navigation';

interface Props {
  id: string | undefined;
}

const DeleteBlock = ({ id }: Props) => {
  const router = useRouter();

  const deleteTicket = async () => {
    const apiUrl = process.env.API_URL;
    try {
      const res = await fetch(`${apiUrl}/api/Tickets/${id}`, {
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
