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
      <h4>Ticket Title</h4>
      <hr className='h-px border-0 bg-orange-400 mb-2' />
      <p className='whitespace-pre-wrap'>The Description! Do not TOUCH! </p>
      <div className='flex-grow'></div>
      <div className='flex mt-2'>
        <div className='flex flex-col'>
          <p className='text-xs my-1'>2/16/23 10:00AM</p>
          <ProgressDisplay />
        </div>
        <div className='ml-auto flex items-end'>
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
