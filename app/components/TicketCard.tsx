import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';
import Link from 'next/link';

export interface CategoryTypes {
  _id: string;
  title: string;
  description: string;
  category: string;
  priority: number;
  progress: number;
  status: string;
  active: boolean;
  createdAt: Date;
}

interface Props {
  ticket: CategoryTypes;
  id: number;
}

const TicketCard = ({ ticket }: Props) => {
  const formatTimeStamp = (timestamp: Date) => {
    const options: Object = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString('en-US', options);

    return formattedDate;
  };

  return (
    <div className='flex flex-col bg-blue-400 hover:bg-blue-200 rounded-md shadow-lg p-3 m-2'>
      <div className='flex mb-3'>
        <PriorityDisplay priority={ticket.priority} />
        <div className='ml-auto'>
          <DeleteBlock id={ticket._id} />
        </div>
      </div>
      <Link href={`/TicketPage/${ticket._id}`} style={{ display: 'contents' }}>
        <h4>{ticket.title}</h4>
        <hr className='h-px border-0 bg-orange-400 mb-2' />
        <p className='whitespace-pre-wrap'>{ticket.description} </p>
        <div className='flex-grow'></div>
        <div className='flex mt-2'>
          <div className='flex flex-col'>
            <p className='text-xs my-1'>{formatTimeStamp(ticket.createdAt)}</p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <div className='ml-auto flex items-end'>
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
