import React from "react";
import useForm from "../hooks/useForm";

export default function Form() {
  const { onChangeInput, todoInputValue, onSubmit } = useForm();

  return (
    <>
      <div className="mt-4 flex flex-col items-start">
        <input type="text" placeholder="input text here..." value={todoInputValue} onChange={onChangeInput} className="p-3 bg-gray-100 w-full rounded-sm"/>
        <button type="submit" className="bg-green-500 text-white w-full mt-4 p-2 rounded-sm" onClick={onSubmit}>Add Item</button>
      </div>
    </>
  );
}
