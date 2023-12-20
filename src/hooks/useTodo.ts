import { useShallow } from 'zustand/react/shallow'
import useTodosStore from '../stores/todos'

export default function useTodo() {
const { todos, updateTodos } = useTodosStore(useShallow((state) => ({todos: state.todos, updateTodos: state.updateTodos})))

    const onComplete = ( index: number) => {
        const cloneDataTodos = [...todos]
        const itemActive : any = cloneDataTodos[index]
        itemActive.isComplete = true

        updateTodos(cloneDataTodos)
    }
    const onDeleteItem = (index: number) => {
        const cloneDataTodos = [...todos]
        cloneDataTodos.splice(index, 1)

        updateTodos(cloneDataTodos)
    }

  return {
    todos,
    onComplete,
    onDeleteItem
  }
}
