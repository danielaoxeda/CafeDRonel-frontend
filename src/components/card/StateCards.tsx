import type { JSX } from "react";

interface StatCardProps {
  title: string
  icon: JSX.Element
  value: string
  className?: string
  showDate?: boolean 
}

export default function StatCard({ title, icon, value, className, showDate }: StatCardProps) {
  // Calcula la fecha antes del return
  const today = new Date().toLocaleDateString("es-PE", {
    weekday: "long", 
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={`w-full p-6 bg-secondary rounded-lg ${className} flex justify-between items-center`}>
      <div className="flex flex-col gap-2">
        <p className="text-xl">{title}</p>
        {showDate && <p className="text-sm text-gray-500">{today}</p>}
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <div>{icon}</div>
    </div>
  );
}
