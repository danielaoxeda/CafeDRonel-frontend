import { useState } from "react";
import { Bell, Clock, Check } from "lucide-react";

type Notification = {
  id: number;
  title: string;
  description: string;
  time: string;
  read: boolean;
};

export function Notifications() {
  const [isOpen, setIsOpen] = useState(false);

  // Notificaciones de ejemplo
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Nuevo usuario registrado",
      description: "El usuario Juan Pérez se unió al sistema",
      time: "Hace 2 minutos",
      read: false,
    },
    {
      id: 2,
      title: "Actualización completada",
      description: "El sistema se actualizó a la versión 1.2.3",
      time: "Hace 1 hora",
      read: false,
    },
    {
      id: 3,
      title: "Contraseña cambiada",
      description: "Se actualizó la contraseña del admin principal",
      time: "Hace 3 horas",
      read: false,
    },
  ]);

  // Contador de no leídas
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Marcar todas como leídas
  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, read: true }))
    );
  };

  // Marcar una notificación como leída
  const markOneAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  return (
    <div className="relative">
      {/* Botón campana */}
      <button onClick={() => setIsOpen(!isOpen)} className="relative">
        <Bell className="w-6 h-6 text-gray-600 hover:text-primary" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Panel de notificaciones */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white shadow-xl rounded-lg border border-gray-200 z-50">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="text-lg font-semibold">Notificaciones</h3>
            {unreadCount > 0 && (
              <button
                className="text-sm text-primary hover:underline"
                onClick={markAllAsRead}
              >
                Marcar todo como leído
              </button>
            )}
          </div>

          <div className="max-h-72 overflow-y-auto divide-y divide-gray-100">
            {notifications.length > 0 ? (
              notifications.map((notif) => (
                <div
                  key={notif.id}
                  onClick={() => markOneAsRead(notif.id)}
                  className={`px-4 py-3 cursor-pointer transition ${
                    notif.read ? "bg-gray-50 text-gray-400" : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">{notif.title}</p>
                    {!notif.read && (
                      <Check className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <p className="text-xs">{notif.description}</p>
                  <div className="flex items-center mt-1 text-xs text-gray-400">
                    <Clock className="w-3 h-3 mr-1" />
                    {notif.time}
                  </div>
                </div>
              ))
            ) : (
              <p className="px-4 py-8 text-center text-gray-500 text-sm">
                No tienes notificaciones
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}