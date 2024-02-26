interface Props {
  priority: number;
}

const PriorityDisplay = ({ priority }: Props) => {
  return (
    <div className='flex justify-start align-baseline'>
      <p className={`pr-1 ${priority > 0 ? 'text-red-400' : 'text-slate-400'}`}>
        FireIcon
      </p>
      <p className={`pr-1 ${priority > 1 ? 'text-red-400' : 'text-slate-400'}`}>
        FireIcon
      </p>
      <p className={`pr-1 ${priority > 2 ? 'text-red-400' : 'text-slate-400'}`}>
        FireIcon
      </p>
      <p className={`pr-1 ${priority > 3 ? 'text-red-400' : 'text-slate-400'}`}>
        FireIcon
      </p>
      <p className={`pr-1 ${priority > 4 ? 'text-red-400' : 'text-slate-400'}`}>
        FireIcon
      </p>
    </div>
  );
};

export default PriorityDisplay;
