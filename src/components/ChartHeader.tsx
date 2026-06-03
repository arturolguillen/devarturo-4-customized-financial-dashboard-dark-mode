import clsx from "clsx";

const filterOptions = [
    {
        text: '1M',
        active: true,
    },
    {
        text: '3M',
        active: false,
    },
    {
        text: '1Y',
        active: false,
    },
];

export default function ChartHeader() {
    return (
        <div className="flex justify-between items-center mb-8">
            <div className="space-y-1">
                <h3 className="text-xl font-bold text-zinc-100">{'Rendimiento de Cartera'}</h3>
                <p className="text-zinc-500 text-xs">{'Crecimiento consolidado últimos 30 días'}</p>
            </div>
            <div className="flex gap-2">
                {filterOptions.map(option => (
                    <button
                        type="button"
                        key={option.text}
                        className={clsx({
                            'px-3 py-1 rounded-md text-[10px] font-bold cursor-pointer': true,
                            'hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 transition-colors': !option.active,
                            'bg-zinc-800 text-emerald-400 ring-1 ring-emerald-500/20': option.active,
                        })}
                    >
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    );
}