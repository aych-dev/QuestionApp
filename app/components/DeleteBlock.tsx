const DeleteBlock = () => {
  const deleteTicket = async ({ id }) => {
    const res = await fetch(`https://localhost:3000/api/Tickets/${id}`);
  };
  return (
    <p className='text-red-400 hover:cursor-pointer hover:text-red-200 '>
      Delete
    </p>
  );
};

export default DeleteBlock;
