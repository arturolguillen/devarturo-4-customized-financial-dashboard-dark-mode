import Image from "next/image";
import Graphic from "./../images/graphic.png";

export default function ChartGraphic() {
    return (
        <div className="relative">
            <Image
                src={Graphic}
                alt="Chart Graphic"
                loading="eager"
                className="object-center"
            />
            <div className="absolute -top-6 right-0 bg-emerald-500 px-2 py-1 rounded text-[8px] text-zinc-950 font-black uppercase tracking-tighter">{'Máximo Histórico'}</div>
        </div>
    );
}