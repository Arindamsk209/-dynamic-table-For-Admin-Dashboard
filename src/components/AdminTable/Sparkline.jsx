import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

export default function Sparkline({ data }) {
  return (
    <div className="w-[80px] h-[30px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="value" stroke="#fb923c" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
