interface Props {
  status: string | undefined;
}

const StatusDisplay = ({ status }: Props) => {
  const getColor = (status: string) => {
    let color = 'bg-slate-700';
    if (status === 'done') {
      color = 'bg-green-200';
      return color;
    } else if (status === 'started') {
      color = 'bg-yellow-200';
      return color;
    } else if (status === 'not started') {
      color = 'bg-red-200';
      return color;
    }
    return color;
  };

  if (status === undefined) {
    return;
  }

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-white ${getColor(
        status
      )} `}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
