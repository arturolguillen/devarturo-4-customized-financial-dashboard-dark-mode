export default function ChartFooter() {
    return (
        <div className="flex justify-between mt-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            {['01 Oct', '08 Oct', '15 Oct', '22 Oct', '29 Oct'].map(item => (
                <span key={item}>{item}</span>
            ))}
        </div>
    );
}