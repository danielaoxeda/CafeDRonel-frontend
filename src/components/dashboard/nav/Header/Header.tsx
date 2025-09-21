import { useUser } from "../../../User/UserContext";
import { Notifications } from "../notificactions/Notifications";
import { UserAvatar } from "../../../User/UserAvatar";

export function Header() {
  const { user } = useUser(); 

  return (
    <div className="flex justify-between items-center mb-10 px-0 pt-8">
      <h1 className="text-2xl font-bold ml-8">Ajustes de Administrador</h1>
      <div className="flex items-center gap-4 mr-8">
        <Notifications />
        <UserAvatar name={user.name} size={30} />
      </div>
    </div>
  );
}

