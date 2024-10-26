'use client';
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 100,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 45,
    fill: '#F9A90E',
  },
  {
    name: 'Boys',
    count: 55,
    fill: '#0E78F9',
  },
];


const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* TITLE */}
        <div className='flex justify-between items-center'>
            <h1>Students</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20}/>
        </div>
        {/* CHART */}
        <div className='w-full h-[75%]'>
            <ResponsiveContainer>
                <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={36} data={data}>
                <RadialBar                    
                    label={{ position: 'insideStart', fill: '#fff' }}
                    background                    
                    dataKey="count"
                />                
                </RadialBarChart>
            </ResponsiveContainer>
        </div>

        {/* BOTTOM */}
        <div className='flex justify-center gap-16'>
            <div className="flex flex-col gap-1">
                <div className="w-4 h-4 bg-sbrtBlue rounded-full " />
                <h1 className="font-bold text-sm">1,236</h1>
                <h2 className="text-xs text-gray-300">Boys 55%</h2>
            </div>
            <div className="flex flex-col gap-1">
                <div className="w-4 h-4 bg-sbrtYellow rounded-full" />
                <h1 className="font-bold text-sm">1,116</h1>
                <h2 className="text-xs text-gray-300">Girs 45%</h2>
          </div>
        </div>
    </div>
  )
}

export default CountChart