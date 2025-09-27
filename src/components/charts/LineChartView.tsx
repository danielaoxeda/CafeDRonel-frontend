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
          <Line type="monotone" dataKey="empaque" name="Cafetera Moka" stroke="#8884d8" />
          <Line type="monotone" dataKey="empaque" name="Cafetera Eléctrica" stroke="#c5a662ff" />
          <Line type="monotone" dataKey="empaque" name="Prensa Francesa" stroke="#d884b8ff" />
          <Line type="monotone" dataKey="grano" name="Café tostado en grano 1/4 kg" stroke="#82ca9d" />
          <Line type="monotone" dataKey="moka" name="Café molido (moka) 1/4 kg" stroke="#ffc658" />
          <Line type="monotone" dataKey="electrica" name="Café molido (eléctrica) 1/4 kg" stroke="#f56969" />
          <Line type="monotone" dataKey="prensa" name="Café molido (prensa francesa) 1/4 kg" stroke="#0088FE" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}