import { create } from "zustand/react";
type UserData = {
  name: string;
  email: string;
  phone: string;
};

type UserState = {
  user:UserData
  
  setUser: (user: UserData) => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: { name: "Menor Silva", email: "menor.silva@gmail.com", phone: "+51 963 509 165" },
  setUser: (user) => set((prevState) => ({ user: { ...prevState.user, ...user } })),
}));