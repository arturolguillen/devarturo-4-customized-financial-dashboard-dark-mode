import { ChartNoAxesColumn } from "lucide-react";
import Card from "./Card";
import { formatAmount } from "@/lib/formatAmount";

export default function Volume() {
    return (
        <Card>
            <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{'Volumen'}</span>
                <div className="size-8 rounded-full bg-zinc-800 flex items-center justify-center">
                    <ChartNoAxesColumn className="text-zinc-400" size={18} />
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-3xl font-bold text-zinc-100 tabular-nums">{`$${formatAmount(892400)}`}</h2>
                <span className="text-xs text-zinc-500">{'Global 24h'}</span>
            </div>
        </Card>
    );
}