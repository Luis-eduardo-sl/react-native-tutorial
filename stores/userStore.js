import { create } from 'zustand'

const useUserStore = create((set) => ({
  users: [],
  setUsers: (newUsers) => set(() => ({ users: newUsers })),
  addUser: (newUser) => set((state) => ({ users: [...state.users, newUser] })),
  removeUser: (id) => set((state) => {
    const usersFiltrado = state.users.filter((user =>user.id !== id))
    return {users: usersFiltrado}
  }),
  updateUser: (id, data) => set((state) => {
    const usersUpdate = state.users.map((user => {
      if(user.id === id){
        return {id, ...data}
      }
      return user
    }))
    return {users: usersUpdate}
  }),
}))

export default useUserStore

// state guarda o valor atual de todos os estados como um objeto