import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { ActiveDotProps } from 'recharts/types/util/types';

const data = [
  { name: 'Ene', ventas: 4200, clientes: 310 },
  { name: 'Feb', ventas: 3900, clientes: 290 },
  { name: 'Mar', ventas: 4700, clientes: 330 },
  { name: 'Abr', ventas: 5100, clientes: 360 },
  { name: 'May', ventas: 4900, clientes: 350 },
  { name: 'Jun', ventas: 5300, clientes: 370 },
  { name: 'Jul', ventas: 5600, clientes: 390 },
  { name: 'Ago', ventas: 6000, clientes: 420 },
  { name: 'Set', ventas: 5800, clientes: 400 },
  { name: 'Oct', ventas: 6200, clientes: 440 },
];

const CustomizedDot = (props: ActiveDotProps) => {
  const { cx, cy, value } = props;

  if (cx == null || cy == null) return <g />;

  // Punto rojo si supera el promedio de ventas del año (~5200)
  if (value && value > 5200) {
    return (
      <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="red" viewBox="0 0 1024 1024">
        <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76z" />
      </svg>
    );
  }

  return (
    <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="green" viewBox="0 0 1024 1024">
      <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352z" />
    </svg>
  );
};

const DotLineChartView = () => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" label={{ value: 'Mes', position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: 'S/ Ventas', angle: -90, position: 'insideLeft' }} />
          <Tooltip formatter={(value: number) => `S/ ${value.toLocaleString()}`} />
          <Legend />
          <Line type="monotone" dataKey="ventas" stroke="#8884d8" dot={CustomizedDot} name="Ventas mensuales" />
          <Line type="monotone" dataKey="clientes" stroke="#82ca9d" name="Clientes atendidos" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DotLineChartView;
