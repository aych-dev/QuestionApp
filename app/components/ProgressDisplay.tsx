interface Props {
  progress: number;
}

const ProgressDisplay = ({ progress }: Props) => {
  return (
    <div className='w-full bg-green-400 rounded-full h-2.5'>
      <div
        className='bg-black h-2.5 rounded-full'
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressDisplay;
