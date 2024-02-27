import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';

export interface CategoryTypes {
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
  return (
    <div className='flex flex-col bg-blue-400 hover:bg-blue-200 rounded-md shadow-lg p-3 m-2'>
      <div className='flex mb-3'>
        <PriorityDisplay priority={ticket.priority} />
        <div className='ml-auto'>
          <DeleteBlock />
        </div>
      </div>
      <h4>{ticket.title}</h4>
      <hr className='h-px border-0 bg-orange-400 mb-2' />
      <p className='whitespace-pre-wrap'>{ticket.description} </p>
      <div className='flex-grow'></div>
      <div className='flex mt-2'>
        <div className='flex flex-col'>
          <p className='text-xs my-1'>{ticket.createdAt}</p>
          <ProgressDisplay progress={ticket.progress} />
        </div>
        <div className='ml-auto flex items-end'>
          <StatusDisplay status={ticket.status} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
