interface Props {
  status: string;
}

const StatusDisplay = ({ status }: Props) => {
  const getColor = {
    color: 'bg-slate-700',
    done: 'bg-green-200',
    started: 'bg-yellow-200',
    notStarted: 'bg-red-200',
  };

  return (
    <span className='inline-block rounded-full px-2 py-1 text-xs font-semibold text-white bg-slate-700'>
      {status}
    </span>
  );
};

export default StatusDisplay;
