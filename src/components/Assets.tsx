export default function Assets({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
            {children}
        </div>
    );
}