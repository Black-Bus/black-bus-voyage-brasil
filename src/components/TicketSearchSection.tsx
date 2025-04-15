
import React from 'react';
import { Button } from './ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from './ui/select';
import { Calendar, MapPin, Users } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Calendar as CalendarComponent } from './ui/calendar';
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const TicketSearchSection = () => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <section className="relative z-20 mt-[-80px] px-4">
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8">
          <div className="text-center mb-6">
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-black mb-2">
              Sua Jornada Exclusiva Começa Aqui
            </h2>
            <p className="text-silver-700">Encontre as melhores opções de viagem em todo o Brasil</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="block text-silver-800 font-medium">Origem</label>
              <Select>
                <SelectTrigger className="bg-white text-black border-silver-200 h-14 w-full">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-silver-500" />
                    <SelectValue placeholder="Selecione a origem" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="sao-paulo">São Paulo</SelectItem>
                  <SelectItem value="rio-de-janeiro">Rio de Janeiro</SelectItem>
                  <SelectItem value="belo-horizonte">Belo Horizonte</SelectItem>
                  <SelectItem value="brasilia">Brasília</SelectItem>
                  <SelectItem value="salvador">Salvador</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-silver-800 font-medium">Destino</label>
              <Select>
                <SelectTrigger className="bg-white text-black border-silver-200 h-14 w-full">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-silver-500" />
                    <SelectValue placeholder="Selecione o destino" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="sao-paulo">São Paulo</SelectItem>
                  <SelectItem value="rio-de-janeiro">Rio de Janeiro</SelectItem>
                  <SelectItem value="belo-horizonte">Belo Horizonte</SelectItem>
                  <SelectItem value="brasilia">Brasília</SelectItem>
                  <SelectItem value="salvador">Salvador</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-silver-800 font-medium">Data</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="bg-white text-black border-silver-200 h-14 w-full justify-start"
                  >
                    <Calendar className="mr-2 h-4 w-4 text-silver-500" />
                    {date ? format(date, "dd/MM/yyyy") : "Selecione a data"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <label className="block text-silver-800 font-medium">Passageiros</label>
              <Select>
                <SelectTrigger className="bg-white text-black border-silver-200 h-14 w-full">
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-silver-500" />
                    <SelectValue placeholder="1 passageiro" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="1">1 passageiro</SelectItem>
                  <SelectItem value="2">2 passageiros</SelectItem>
                  <SelectItem value="3">3 passageiros</SelectItem>
                  <SelectItem value="4">4 passageiros</SelectItem>
                  <SelectItem value="5">5 passageiros</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button className="bg-black text-white hover:bg-silver-900 font-semibold px-10 py-6 text-lg">
              Buscar Viagens
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketSearchSection;
