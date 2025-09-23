import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface Props {
  title: string;
  data: any[];
}

export default function LineChartView({ title, data }: Props) {
  return (
    <div className="w-full h-80">
      <h2 className="text-2xl font-bold ml-8 mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="empaque" name="Empaque 1/4 kg" stroke="#8884d8" />
          <Line type="monotone" dataKey="grano" name="Café tostado en grano" stroke="#82ca9d" />
          <Line type="monotone" dataKey="moka" name="Café molido (moka)" stroke="#ffc658" />
          <Line type="monotone" dataKey="electrica" name="Café molido (eléctrica)" stroke="#f56969" />
          <Line type="monotone" dataKey="prensa" name="Café molido (prensa francesa)" stroke="#0088FE" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}