import clsx from "clsx";
import type { AssetItem } from "./AssetsTableBody";
import { usdFormatter } from "@/lib/formatAmount";

export default function AssetsTableRow({ item }: {
    item: AssetItem;
}) {
    return (
        <tr className="hover:bg-zinc-800/50 transition-colors group">
            <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                    {item.icon}
                    <div>
                        <p className="text-sm font-bold">{item.coin}</p>
                        <p className="text-[10px] text-zinc-500">{item.coin_currency}</p>
                    </div>
                </div>
            </td>
            <td className="px-6 py-5 font-mono text-xs text-zinc-100">
                {usdFormatter(item.price)}
            </td>
            <td className="px-6 py-5">
                <span className={clsx({
                    'font-bold text-xs': true,
                    'text-emerald-400': item.exchange_type === 'up',
                    'text-rose-500': item.exchange_type === 'down',
                })}>{item.exchange_type === 'up' ? '+' : '-'}{item.exchange}</span>
            </td>
            <td className="px-6 py-5 font-mono text-xs text-zinc-100">{item.balance} {item.coin_currency}</td>
            <td className="px-6 py-5 font-mono text-xs text-zinc-100">{usdFormatter(item.value_usd)}</td>
            <td className="px-6 py-5 text-center">
                <button type="button" className="px-4 py-1.5 bg-zinc-800 rounded-lg text-[10px] font-black uppercase tracking-tighter hover:bg-emerald-500 hover:text-zinc-950 transition-all cursor-pointer">{'Trade'}</button>
            </td>
        </tr>
    );
}