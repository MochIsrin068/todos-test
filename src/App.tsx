import React from "react";
import Form from "./components/Form";
import ItemList from "./components/ItemList";

import useTodo from "./hooks/useTodo";
import Divider from "./components/Divider";

export default function App() {
  const { todos, onDeleteItem, onComplete } = useTodo();

  return (
    <main className="flex items-center justify-center bg-gray-300 w-screen h-screen">
      <div className="bg-white rounded-xl p-6 min-w-[500px] min-h-[300px]">
        <h1 className="bg-red-50 rounded p-2 text-xl font-bold">Todo List App</h1>
        <Divider />
        <Form />
        <Divider />
        <ItemList
          items={todos}
          onDeleteItem={onDeleteItem}
          onComplete={onComplete}
        />
      </div>
    </main>
  );
}
