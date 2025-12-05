import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", Total: 1200 },
  { name: "Feb", Total: 2100 },
  { name: "Mar", Total: 800 },
  { name: "Apr", Total: 1260 },
  { name: "May", Total: 900 },
  { name: "Jun", Total: 1700 },
];

export default function Chart({ isAnimationActive = true }) {
  return (
    <div className="chart">
      <div className="title">Last 6 months revenue</div>
      <AreaChart
        style={{
          width: "100%",
          maxWidth: "none",
          maxHeight: "25vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Total"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#total)"
          isAnimationActive={isAnimationActive}
        />
      </AreaChart>
    </div>
  );
}
