type TPropsItem = {
  data: {
    value: string;
    index: number;
    isComplete?: boolean;
  };
  onDeleteItem: (index: number) => void
  onComplete: (index: number) => void
};

export default function Item({ data, onDeleteItem, onComplete }: TPropsItem) {
  return (
    <>
      <div className="flex items-center mt-3 rounded border border-gray-200 p-2">
        <span className={`${data.isComplete ? 'line-through' : ''}`}>{data.value}</span>
        <div className="flex items-center ml-3">
        <button onClick={() => onDeleteItem(data.index)} className="bg-red-500 p-2">Hapus</button>
        {!data.isComplete && <button onClick={() => onComplete(data.index)} className="bg-green-200 p-2 ml-1">Complete</button>}
        </div>
      </div>
    </>
  );
}
