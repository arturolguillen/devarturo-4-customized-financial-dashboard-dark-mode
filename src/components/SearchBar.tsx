import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <div className="hidden md:flex items-center bg-zinc-900 rounded-full px-4 py-1.5 w-64 border border-zinc-800 focus-within:border-emerald-500/50 transition-colors gap-2">
            <Search size={16} className="text-zinc-500" />
            <input
                type="search"
                placeholder={'Buscar activo...'}
                className="bg-transparent border-none text-xs focus:ring-0 text-zinc-100 w-full p-0"
            />
        </div>
    );
}