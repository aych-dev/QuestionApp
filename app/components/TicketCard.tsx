import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';

const TicketCard = () => {
  return (
    <div className='flex flex-col bg-blue-400 hover:bg-blue-200 rounded-md shadow-lg p-3 m-2'>
      <div className='flex mb-3'>
        <div className='ml-2'>
          <PriorityDisplay />
        </div>
        <div className='ml-auto'>
          <DeleteBlock />
        </div>
      </div>
      <ProgressDisplay />
      <StatusDisplay />
    </div>
  );
};

export default TicketCard;
