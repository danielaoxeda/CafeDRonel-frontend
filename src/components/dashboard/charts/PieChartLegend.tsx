interface ChartLegendProps {
title: string;
  data: { name: string; color: string }[];
}

export default function PieChartLegend({ data }: ChartLegendProps) {
  return (
    <div className="flex flex-col gap-3">
      {data.map((item) => (
        <div key={item.name} className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-sm"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-sm font-medium text-gray-700">{item.name}</span>
        </div>
      ))}
    </div>
  );
}
