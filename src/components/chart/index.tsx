"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { DollarSign } from "lucide-react";  
import { BarChart, CartesianGrid, XAxis, Bar, Tooltip } from "recharts";

type ChartConfig = {
  [key: string]: {
    label: string;
    color: string;
  };
};

export default function ChartOverview() {
    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
    ]
       
    const chartConfig = {
        desktop: {
          label: "Desktop",
          color: "#2563eb",
        },
        mobile: {
          label: "Mobile",
          color: "#60a5fa",
        },
    } satisfies ChartConfig;

    return (
        <Card className="w-full md:w-1/2 md:max-w-[600px]">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                    Overview de Vendas
                    </CardTitle>
                <DollarSign className="ml-auto w-4 h-4"></DollarSign>
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <BarChart data={chartData}>
                        <CartesianGrid vertical={false}/>
                        <XAxis 
                            dataKey="month" 
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0,3)}
                            stroke="#ccc" />
                        <Tooltip 
                            formatter={(value, name: string) => [
                                `${value}`, 
                                chartConfig[name as keyof typeof chartConfig]?.label || name
                            ]}
                            labelFormatter={(label) => `${label}`}
                            cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                        />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4}/>
                        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4}/>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>     
    );
}