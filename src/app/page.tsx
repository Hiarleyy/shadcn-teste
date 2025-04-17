import ChartOverview from "@/components/chart";
import Sales from "@/components/sales";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { DollarSign, Percent, Users } from "lucide-react";

export default function Home(){
  return(
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card> 
          <CardHeader>
            <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text=gray-600 select-none">Total Vendas
            </CardTitle>
            <DollarSign className="ml-auto w-4 h-4"></DollarSign>
            </div>

            <CardDescription className="flext items-center sm:ml-2 text-gray-500">
               Ultimos 30 dias
            </CardDescription>
            <CardContent className="text-black-800">
              <p className="text-base sm:text-lg font-bold"> R$ 1.000,00</p>
              </CardContent>
          </CardHeader>
          </Card>

          <Card> 
          <CardHeader>
            <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text=gray-600 select-none">Novos Clientes
            </CardTitle>
            <Users className="ml-auto w-4 h-4"></Users>
            </div>

            <CardDescription className="flext items-center sm:ml-2 text-gray-500">
               Novos Clientes em 30 dias
            </CardDescription>
            <CardContent className="text-black-800">
              <p className="text-base sm:text-lg font-bold"> 300</p>
              </CardContent>
          </CardHeader>
          </Card>

          <Card> 
          <CardHeader>
            <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text=gray-600 select-none"> Pedidos Hoje
            </CardTitle>
            <Percent className="ml-auto w-4 h-4"></Percent>
            </div>

            <CardDescription className="flext items-center sm:ml-2 text-gray-500">
               Total de pedidos hoje
            </CardDescription>
            <CardContent className="text-black-800">
              <p className="text-base sm:text-lg font-bold"> 300</p>
              </CardContent>
          </CardHeader>
          </Card>

          <Card> 
          <CardHeader>
            <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text=gray-600 select-none"> Pedidos Hoje
            </CardTitle>
            <Percent className="ml-auto w-4 h-4"></Percent>
            </div>

            <CardDescription className="flext items-center sm:ml-2 text-gray-500">
               Total de pedidos hoje
            </CardDescription>
            <CardContent className="text-black-800">
              <p className="text-base sm:text-lg font-bold"> 300</p>
              </CardContent>
          </CardHeader>
          </Card>
          </section>
          <section className="mt-4 flex flex-col md:flex-row gap-4">
          <ChartOverview/>
          <Sales/>
          </section>
    </main>

  );
}