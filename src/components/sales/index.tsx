"use client"

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { CircleDollarSign } from "lucide-react"; 
import { Avatar,AvatarImage } from "@/components/ui/avatar";
import { BarChart, CartesianGrid, XAxis, Bar, Tooltip } from "recharts";

export default function Sales() {

    return (
        <Card className="flex-1">
        <CardHeader>
            <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                Ultimos clientes
                </CardTitle>
            <CircleDollarSign className="ml-auto w-4 h-4"></CircleDollarSign>
            </div>
        <CardDescription>
            Ultimos clientes nas ultimas 24 horas
        </CardDescription>
        </CardHeader>
        <CardContent>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className=" w-10 h-10">
                    <AvatarImage src = "https://github.com/Hiarleyy.png"/>
                </Avatar>
          
                <div>
                    <p className="text-sm font-semibold">Hiarley</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">Marcoshiarley95@gmail.com</span>
                </div>
                    <p className="text-sm text-gray-500 ml-auto">Ultimo pedido: 10/10/2023</p>
            </article>

            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className=" w-10 h-10">
                    <AvatarImage src = "https://github.com/r0bertgabriel.png"/>
                </Avatar>
          
                <div>
                    <p className="text-sm font-semibold">Robert Gabriel</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">R0bertGabriel@gmail.com</span>
                </div>
                    <p className="text-sm text-gray-500 ml-auto">Ultimo pedido: 12/12/2024</p>
            </article>

            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className=" w-10 h-10">
                    <AvatarImage src = "https://github.com/gabrielfernandes3.png"/>
                </Avatar>
          
                <div>
                    <p className="text-sm font-semibold">Gabriel Fernandes</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">gabrielfernandes3@gmail.com</span>
                </div>
                    <p className="text-sm text-gray-500 ml-auto">Ultimo pedido: 09/08/2023</p>
            </article>
        </CardContent>
        </Card>
    );
}