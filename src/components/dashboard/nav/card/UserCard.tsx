import { useUser } from "../../../User/UserContext";
import { UserAvatar } from "../../../User/UserAvatar";


export default function UserCard() {
  const { user } = useUser();

  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 text-center">
      <UserAvatar name={user.name} size={80} />
      <div className="text-center mt-4">
        <p className="font-semibold text-lg">{user.name}</p>
        {user.email && <p className="text-gray-600 text-sm">{user.email}</p>}
        {user.phone && <p className="text-gray-600 text-sm">{user.phone}</p>}
      </div>
    </div>
  );
}
