import { Award, Star } from "lucide-react";
import Card from "./Card";

export default function Roi() {
    return (
        <Card>
            <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{'Roi Anualizado'}</span>
                <div className="size-8 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Award className="text-orange-400" size={18} />
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-3xl font-bold text-zinc-100 tabular-nums">{'42.8%'}</h2>
                <div className="flex items-center gap-1 text-orange-400">
                    <Star size={14} />
                    <span className="text-xs font-bold">{'Nivel Experto'}</span>
                </div>
            </div>
        </Card>
    );
}