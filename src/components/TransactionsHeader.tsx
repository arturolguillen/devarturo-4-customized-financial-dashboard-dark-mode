export default function TransactionsHeader() {
    return (
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-zinc-100">{'Transacciones'}</h3>
            <button type="button" className="cursor-pointer text-emerald-500 text-[10px] font-bold hover:underline uppercase tracking-widest">{'Ver todas'}</button>
        </div>
    );
}