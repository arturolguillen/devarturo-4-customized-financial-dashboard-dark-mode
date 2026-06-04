import { Download, ListFilter } from "lucide-react";

export default function AssetsHeader() {
    return (
        <div className="p-6 border-b border-zinc-800 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <h3 className="text-xl font-bold text-zinc-100">{'Activos principales'}</h3>
            <div className="flex gap-4">
                <button type="button" className="flex items-center gap-2 font-bold text-zinc-500 hover:text-zinc-100 transition-colors uppercase tracking-widest cursor-pointer">
                    <ListFilter size={14} />
                    <span className="text-[10px]">{'Filtrar'}</span>
                </button>
                <button type="button" className="flex items-center gap-2 font-bold text-zinc-500 hover:text-zinc-100 transition-colors uppercase tracking-widest cursor-pointer">
                    <Download size={14} />
                    <span className="text-[10px]">{'Exportar'}</span>
                </button>
            </div>
        </div>
    );
}