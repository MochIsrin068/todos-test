import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type Todos = {
    todos: []
    updateTodos: (newData: any) => void
}

const useTodosStore = create<Todos>()(
  devtools(
    persist(
      (set) => ({
        todos: [],
        updateTodos: (newData: any) => set((state) => ({ todos: newData })),
      }),
      {
        name: 'todos-storage',
      },
    ),
  ),
)

export default useTodosStore