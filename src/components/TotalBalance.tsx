import { TrendingUp, Wallet } from "lucide-react";
import Card from "./Card";
import { formatAmount } from "../lib/formatAmount";

export default function TotalBalance() {
    const totalBalance = 124592.45;

    return (
        <Card>
            <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{'Saldo Total'}</span>
                <div className="size-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Wallet className="text-emerald-500" size={18} />
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-3xl font-bold text-zinc-100 tabular-nums">{`$${formatAmount(totalBalance)}`}</h2>
                <div className="flex items-center gap-1 text-emerald-400">
                    <TrendingUp size={14} />
                    <span className="text-xs font-bold">{'+5.2% esta semana'}</span>
                </div>
            </div>
        </Card>
    );
}