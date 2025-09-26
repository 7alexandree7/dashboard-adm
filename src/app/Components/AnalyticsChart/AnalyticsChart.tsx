'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import data from '@/data/Analytics'

const AnalyticsChart = () => {
    return (
        <>
            <Card className='my-3'>
                <CardHeader>
                    <CardTitle>Analytics</CardTitle>
                    <CardDescription>Views Per Month</CardDescription>
                </CardHeader>
                <CardContent>
                    <div style={{ width: '100%', height: '300px' }}>
                        <ResponsiveContainer>
                            <LineChart width={1100} height={300} data={data}>
                                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc"/>
                                <XAxis dataKey={"name"} />
                                <YAxis dataKey={"uv"}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default AnalyticsChart
