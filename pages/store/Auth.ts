import { create } from 'zustand'

const AuthStore = create((set) => ({
  user: null,
  init: (e:any) => set((state:any) => ({ user:e}))
}))
export default AuthStore