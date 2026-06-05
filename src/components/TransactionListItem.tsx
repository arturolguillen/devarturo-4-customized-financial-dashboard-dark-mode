import { usdFormatter } from "@/lib/formatAmount";
import type { Transaction } from "@/lib/transactions";
import clsx from "clsx";
import { ArrowRightLeft, MoveDownLeft, MoveUpRight } from "lucide-react";

export default function TransactionListItem({ transaction }: {
    transaction: Transaction;
}) {
    const { type, title, timestamp, amount, currency, balance } = transaction;

    return (
        <div className="flex flex-col sm:flex-row gap-4 p-3 rounded-xl hover:bg-zinc-800 transition-colors cursor-pointer group border border-transparent hover:border-zinc-700">
            <div className="flex items-center gap-4 sm:flex-1">
                <div className={clsx({
                    'size-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform': true,
                    'bg-emerald-500/10': type === 'income',
                    'bg-rose-500/10': type === 'expense',
                    'bg-indigo-500/10': type === 'swap',
                })}>
                    {type === 'income' && <MoveDownLeft size={20} className="text-emerald-500" />}
                    {type === 'expense' && <MoveUpRight size={20} className="text-rose-500" />}
                    {type === 'swap' && <ArrowRightLeft size={20} className="text-indigo-500" />}
                </div>
                <div className="flex-1">
                    <p className="text-sm text-zinc-100 font-bold">{title}</p>
                    <p className="text-[10px] text-zinc-500">{timestamp}</p>
                </div>
            </div>
            <div className="sm:text-right">
                <p className="text-xs font-bold text-zinc-100">
                    {type === 'income' && '+'}
                    {type === 'expense' && '-'}
                    {amount} {currency}
                </p>
                <p className="text-[10px] text-zinc-500">
                    {usdFormatter(balance)} {'USD'}
                </p>
            </div>
        </div>
    );
}