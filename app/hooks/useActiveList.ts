import { create } from 'zustand'

interface ActiveListStore {
  members: string[];
  add: (id: string) => void;
  remove: (id: string) => void;
  set: (ids: string[]) => void;
}

const useActiveList = create<ActiveListStore>((set) => ({
  members: [],
  add: (id) => set((state) => ({ members: [...state.members, id] })),
  remove: (id) => set((state) => ({ members: state.members.filter((memberId) => memberId !== id) })),
  set: (ids) => set({ members: ids })
}));

export default useActiveList;


// import { PrismaClient } from '@prisma/client';
// // import useActiveList from './useActiveList';

// const prisma = new PrismaClient();
// // const { add } = useActiveList();

// async function fetchIds() {
//   const records = await prisma.yourModel.findMany(); // Replace 'yourModel' with your actual model name
//   const ids = records.map(record => record.id); // Replace 'id' with your actual ID field name
//   add(ids);
// }

// fetchIds();