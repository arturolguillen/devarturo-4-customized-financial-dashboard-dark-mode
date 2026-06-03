import { CircleDollarSign, Zap } from "lucide-react";
import Card from "./Card";
import { formatAmount } from "@/lib/formatAmount";

export default function Profit() {
    return (
        <Card>
            <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{'Ganancia 24h'}</span>
                <div className="size-8 rounded-full bg-indigo-500/10 flex items-center justify-center">
                    <CircleDollarSign className="text-indigo-400" size={18} />
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-3xl font-bold text-zinc-100 tabular-nums">{`+$${formatAmount(3210.12)}`}</h2>
                <div className="flex items-center gap-1 text-emerald-400">
                    <Zap size={14} />
                    <span className="text-xs font-bold">{'Impulso alto'}</span>
                </div>
            </div>
        </Card>
    );
}