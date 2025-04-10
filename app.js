import { useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Line
} from 'recharts';

// Komponen utama
export default function TransactionCharts() {
  // Data untuk grafik
  const [transactionData] = useState([
    { name: 'Jan', completed: 65 },
    { name: 'Feb', completed: 78 },
    { name: 'Mar', completed: 90 },
    { name: 'Apr', completed: 81 },
    { name: 'Mei', completed: 105 },
    { name: 'Jun', completed: 120 },
    { name: 'Jul', completed: 135 }
  ]);

  const [accessData] = useState([
    { name: 'Jan', access: 120 },
    { name: 'Feb', access: 150 },
    { name: 'Mar', access: 180 },
    { name: 'Apr', access: 165 },
    { name: 'Mei', access: 210 },
    { name: 'Jun', access: 240 },
    { name: 'Jul', access: 270 }
  ]);

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Grafik 1: Total peserta yang telah menyelesaikan transaksi */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <div className="mr-3 bg-red-100 p-2 rounded-full">
            {/* Ikon user */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#ff5252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h2 className="text-lg font-semibold">Total peserta yang telah menyelesaikan transaksi</h2>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={transactionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="completed" fill="#ff5252" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Grafik 2: Total yang mengakses */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <div className="mr-3 bg-red-100 p-2 rounded-full">
            {/* Ikon user */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#ff5252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h2 className="text-lg font-semibold">Total yang mengakses</h2>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={accessData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="access" stroke="#ff5252" strokeWidth={2} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
