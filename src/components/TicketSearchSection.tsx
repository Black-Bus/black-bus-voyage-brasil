
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from './ui/select';
import { Calendar } from 'lucide-react';
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
    <section className="bg-black py-16 px-4">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-4">
            Sua Jornada Exclusiva Começa Aqui
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="space-y-2">
            <label className="block text-white font-medium">Origem</label>
            <Select>
              <SelectTrigger className="bg-black text-white border-silver-800 h-14 w-full">
                <SelectValue placeholder="Selecione a origem" />
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
            <label className="block text-white font-medium">Destino</label>
            <Select>
              <SelectTrigger className="bg-black text-white border-silver-800 h-14 w-full">
                <SelectValue placeholder="Selecione o destino" />
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
            <label className="block text-white font-medium">Data</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="outline" 
                  className="bg-black text-white border-silver-800 h-14 w-full justify-between"
                >
                  {date ? format(date, "dd/MM/yyyy") : "Selecione a data"}
                  <Calendar className="ml-2 h-4 w-4 opacity-50" />
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
            <label className="block text-white font-medium">Passageiros</label>
            <Select>
              <SelectTrigger className="bg-black text-white border-silver-800 h-14 w-full">
                <SelectValue placeholder="1 passageiro" />
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
          <Button className="bg-white text-black hover:bg-silver-200 font-semibold px-10 py-6 text-lg">
            Buscar Viagens
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TicketSearchSection;
