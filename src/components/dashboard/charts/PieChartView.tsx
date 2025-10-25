import {Cell,Pie,PieChart,ResponsiveContainer,type PieLabelRenderProps,} from "recharts";
import PieChartLegend from "./PieChartLegend";

const productData = [
  { name: "Café en grano", value: 1800 },
  { name: "Café moka", value: 1300 },
  { name: "Cafetera eléctrica", value: 950 },
  { name: "Cafetera prensa francesa", value: 850 },
  { name: "Café empaquetado", value: 1100 },
];

const COLORS = ["#0088FE", "#00C49F", "#e07264ff", "#FF8042", "#A020F0"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: PieLabelRenderProps) => {
  if (
    cx === undefined ||
    cy === undefined ||
    innerRadius === undefined ||
    outerRadius === undefined ||
    percent === undefined
  )
    return null;

  const RADIAN = Math.PI / 180;
  // @ts-expect-error type unknown https://github.com/recharts/recharts/issues/6380
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  // @ts-expect-error type unknown https://github.com/recharts/recharts/issues/6380
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  // @ts-expect-error type unknown https://github.com/recharts/recharts/issues/6380
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={12}
      fontWeight="bold"
    >
    {/* @ts-expect-error type unknown https://github.com/recharts/recharts/issues/6380 */}
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PieChartView({
  isAnimationActive = true,
}: {
  isAnimationActive?: boolean;
}) {
  return (
    <div className="w-full flex items-center justify-between gap-6 h-64">
      {/* Gráfico */}
      <div className="w-2/3 h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={productData}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius="80%"
              fill="#8884d8"
              dataKey="value"
              isAnimationActive={isAnimationActive}
            >
              {productData.map((entry, index) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Leyenda personalizada */}
      <div className="w-1/3">
        <PieChartLegend
          title="Productos populares"
          data={productData.map((p, i) => ({
            name: p.name,
            color: COLORS[i % COLORS.length],
            value: p.value,
          }))}
        />
      </div>
    </div>
  );
}
