import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

// Example data
const salesData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4000 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 7000 },
];

const productPopularity = [
  { name: 'Product A', value: 400 },
  { name: 'Product B', value: 300 },
  { name: 'Product C', value: 300 },
  { name: 'Product D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Analytics() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>

      {/* Sales Line Chart */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sales Over Time</h2>
        <LineChart width={600} height={300} data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>

      {/* Product Popularity Pie Chart */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Product Popularity</h2>
        <PieChart width={700} height={400}>
          <Pie
            data={productPopularity}
            cx={200}
            cy={200}
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}`}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {productPopularity.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>

      {/* Bar Chart for Sales */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Monthly Sales</h2>
        <BarChart width={600} height={300} data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}
