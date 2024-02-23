import getUsers from "../actions_users/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import ChatroomList from "./components/ChatroomList";
import GroupList from "./components/GroupList";
import UserList from "./components/UserList";

export default async function UsersLayout({
  children
}: {
  children: React.ReactNode,
}) {
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <UserList items={users} />
        {/* <GroupList items={users} /> */}
        {/* <ChatroomList items={ChatroomList}/> */}
        {children}
      </div>
    </Sidebar>
  );
}
