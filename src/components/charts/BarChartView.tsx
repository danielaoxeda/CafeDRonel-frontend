import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Props {
  title: string;
  data: any[];
}

export default function BarChartView({ title, data }: Props) {
  return (
    <div className="w-full h-80">
      <h2 className="text-2xl font-bold ml-8 mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ventas" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}