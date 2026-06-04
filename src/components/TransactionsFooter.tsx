import { Info } from "lucide-react"

export default function TransactionsFooter() {
    return (
        <div className="mt-6 bg-zinc-950 rounded-xl p-4 flex items-center gap-4 border border-zinc-800 ring-1 ring-orange-500/10">
            <Info size={14} className="text-orange-400" />
            <p className="text-[10px] text-zinc-500 font-medium">{'Tienes 2 depósitos pendientes de confirmación en la red.'}</p>
        </div>
    );
}