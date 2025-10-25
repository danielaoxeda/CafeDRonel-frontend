import type { JSX } from "react";

interface ChartCardProps {
  title: string;
  icon?: JSX.Element;
  chart: JSX.Element; 
  className?: string;
  showDate?: boolean;
}

export default function ChartCard({ title, icon, chart, className, showDate }: ChartCardProps) {
  const today = new Date().toLocaleDateString("es-PE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={`w-full p-6 bg-secondary rounded-lg ${className} flex flex-col gap-4`}>
      {/* Encabezado */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xl font-semibold">{title}</p>
          {showDate && <p className="text-sm text-gray-500">{today}</p>}
        </div>
        {icon && <div>{icon}</div>}
      </div>

      {/* Contenido del gráfico */}
      <div className="w-full h-60 flex justify-center items-center">
        {chart}
      </div>
    </div>
  );
}
