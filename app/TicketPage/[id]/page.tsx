import TicketForm from '@/app/components/TicketForm';

const getTicketById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    throw new Error('Failed to get Ticket');
  }
};

const TicketPage = async ({ params }: any) => {
  const EDITMODE = params.id === 'new' ? false : true;

  let updateTicketData = {};

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    console.log(updateTicketData);
  }

  return <TicketForm />;
};

export default TicketPage;
