import React from "react";
import Item from "./Item";

type TPropsItemList = {
  items: Array<{
    value: string;
    isComplete: boolean;
  }>;
  onDeleteItem: (index: number) => void;
  onComplete: (index: number) => void;
};

export default function ItemList({
  items,
  onDeleteItem,
  onComplete,
}: TPropsItemList) {
  return (
    <div className="mt-4">
      <h2>List Todos :</h2>
      {items.map((item: {
        value: string;
        isComplete: string;
      }, index: number) => (
        <Item
          key={index}
          data={{
            index,
            value: item?.value,
            isComplete: item?.isComplete || false,
          }}
          onDeleteItem={onDeleteItem}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
}
