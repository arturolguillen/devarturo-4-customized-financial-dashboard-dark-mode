import { Bell, Moon } from "lucide-react";

export default function TopAppBarActions() {
    return (
        <>
            <div className="hidden sm:flex gap-2">
                <button
                    type="button"
                    className="px-4 py-1.5 border border-zinc-700 rounded-lg text-zinc-300 text-xs font-semibold hover:bg-zinc-900 transition-all cursor-pointer"
                >
                    {'Retirar'}
                </button>
                <button
                    type="button"
                    className="px-4 py-1.5 bg-emerald-500 text-zinc-950 rounded-lg text-xs font-bold hover:bg-emerald-400 transition-all cursor-pointer"
                >
                    {'Depositar'}
                </button>
            </div>
            <div className="flex gap-3 ml-2">
                <Bell className="cursor-pointer text-zinc-400 hover:text-emerald-500 transition-colors" size={20} />
                <Moon className="cursor-pointer text-zinc-400 hover:text-emerald-500 transition-colors" size={20} />
            </div>
        </>
    );
}