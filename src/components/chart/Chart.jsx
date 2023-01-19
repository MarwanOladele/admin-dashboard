import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({title, data, dataKey, grid}) => {
  
  return (
    <div className="chart">
      <h3 className="chart_title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line dataKey={dataKey} type="monotone" stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='7 7'/> }
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
