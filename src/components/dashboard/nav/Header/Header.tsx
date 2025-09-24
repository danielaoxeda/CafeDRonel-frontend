import { UserAvatar } from "../../../User/UserAvatar";
import { useUserStore } from "../../../User/UserState";
import { Notifications } from "../notifications/Notifications";


export function Header() {
  const { user } = useUserStore();

  return (
    <div className="flex justify-between items-center mb-10 px-0 pt-8">
      <h1 className="text-2xl font-bold">Reportes de Venta</h1>
      <div className="flex items-center gap-4 mr-8">
        <Notifications />
        <UserAvatar name={user.name} size={30} />
      </div>
    </div>
  );
}
