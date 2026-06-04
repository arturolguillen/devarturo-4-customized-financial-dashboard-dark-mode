export default function AssetsTableHead() {
    return (
        <thead>
            <tr className="text-[10px] font-black text-zinc-500 uppercase tracking-widest bg-zinc-950/50">
                <th className="px-6 py-4">{'Activo'}</th>
                <th className="px-6 py-4">{'Precio'}</th>
                <th className="px-6 py-4">{'Cambio 24h'}</th>
                <th className="px-6 py-4">{'Balance'}</th>
                <th className="px-6 py-4">{'Valor USD'}</th>
                <th className="px-6 py-4 text-center">{'Acción'}</th>
            </tr>
        </thead>
    );
}