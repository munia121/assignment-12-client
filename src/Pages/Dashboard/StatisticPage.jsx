/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie } from 'recharts';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Legend } from '@headlessui/react';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const StatisticPage = () => {

    const axiosSecure = useAxiosSecure()
    // eslint-disable-next-line no-unused-vars
    const { data: chartData = [], isLoading, refetch } = useQuery({
        queryKey: ['all-test'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/all-tests`)
            // console.log(data)
            return data
        }
    })
    console.log(chartData)


    const { data: pieData = [] } = useQuery({
        queryKey: ['booked-data'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/booked-data`)
            // console.log(data)
            return data
        }
    })
    console.log(pieData)


    // 

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };



    // custom shape for the pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = pieData.map(data => {
        return { name: "ajhdgsf", value: data.count }
    })
    console.log(pieChartData)

    const data = chartData.map(data => {
        // console.log(data.count)
        return { name: data.name.slice(0, 5), value: data.count }
    })

    // console.log(data)

    return (
        <div>
            <div className='lg:flex justify-center lg:gap-20 lg:mt-44'>
                <div>
                    <BarChart
                        width={700}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="value" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                    <h2 className='text-center font-bold'>Mostly booked service</h2>
                </div>


                <div className=" ml-20">
                    <div className='flex items-center'>
                        <p>1. Complete = </p>
                        <div className='h-10 rounded-full w-10 bg-blue-500'></div>
                    </div>
                    <div className='flex items-center'>
                        <p>2. Pending = </p>
                        <div className='h-10 rounded-full w-10 bg-[#22c08b]'></div>
                    </div>
                    <PieChart width={500} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="30%"
                            cy="30%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                    <h2 className='lg:-mt-32 font-bold'> Delivery ratio, pending/completed .</h2>
                </div>
            </div>
        </div>
    );
};

export default StatisticPage;