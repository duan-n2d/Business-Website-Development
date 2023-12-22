import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PoEChart = ({ data }) => {
  return (
    <div className="w-full h-screen">
      <ResponsiveContainer width="80%" height="80%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
  
function AdminSales() {
    const chartData = [
        { name: 'Currency A', value: 300 },
        { name: 'Currency B', value: 500 },
        { name: 'Currency C', value: 700 },
        // Add more data as needed
      ];
  return (
    <div>
        <div>
            <p className='gakki-h3'>Admin Sales</p>
        </div>
        <div className='content'>
            {/*Right content: date*/}
            <div className='flex justify-end mb-5'>
                <div className='bg-white rounded-xl shadow'>
                    {/*Date -> filter by date, week, month, year and default: today*/}
                    <div className='date px-10 py-4'>
                        <div className='date-item'>
                            <p>Today</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*6 matrix of sales - dynamic*/}
            <div className='matrix card'>
                <div className='matrix-row grid grid-cols-3 gap-5'>
                    <div className='matrix-card bg-white rounded-xl shadow'>
                        <div className='matrix-card-item px-8 py-4'>
                            <p>Item</p>
                        </div>
                    </div>
                    <div className='matrix-card bg-white rounded-xl shadow'>
                        <div className='matrix-card-item px-8 py-4'>
                            <p>Item</p>
                        </div>
                    </div>
                    <div className='matrix-card bg-white rounded-xl shadow'>
                        <div className='matrix-card-item px-8 py-4'>
                            <p>Item</p>
                        </div>
                    </div>
                    <div className='matrix-card bg-white rounded-xl shadow'>
                        <div className='matrix-card-item px-8 py-4'>
                            <p>Item</p>
                        </div>
                    </div>
                    <div className='matrix-card bg-white rounded-xl shadow'>
                        <div className='matrix-card-item px-8 py-4'>
                            <p>Item</p>
                        </div>
                    </div>
                    <div className='matrix-card bg-white rounded-xl shadow'>
                        <div className='matrix-card-item px-8 py-4'>
                            <p>Item</p>
                        </div>
                    </div>
                </div>
                
            </div>
            {/*2 dash board*/}
            <div className='dash-board card mt-5'>
                <div className='dash-board-row grid grid-cols-2 gap-5'>
                    <div className='dash-board-col bg-white rounded-xl shadow'>
                        <div className='dash-board-item px-8 py-4'>
                            <p>Item</p>
                            <PoEChart data={chartData} />
                        </div>
                    </div>
                    <div className='dash-board-col bg-white rounded-xl shadow'>
                        <div className='dash-board-item px-8 py-4'>
                            <p>Item</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AdminSales;