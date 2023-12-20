import { useCallback, useState } from "react";
import useTodosStore from '../stores/todos'
import { useShallow } from "zustand/react/shallow";

export default function useForm() {
const { todos, updateTodos } = useTodosStore(useShallow((state) => ({todos: state.todos, updateTodos: state.updateTodos})))
  const [todoInputValue, setTodoInputValue] = useState("");

  const onChangeInput = (event: any) => {
    event.preventDefault();
    const target = event.target
    const value = target?.value || ''

    setTodoInputValue(value);
  };

  const onSubmit = useCallback(() => {
    updateTodos([...todos, {value: todoInputValue, isComplete: false}])
    setTodoInputValue('')
  }, [todoInputValue])

  return {
    onChangeInput,
    todoInputValue,
    onSubmit
  };
}
