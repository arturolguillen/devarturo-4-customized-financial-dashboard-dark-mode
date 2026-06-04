export default function TopAppbar({ children }: {
    children: React.ReactNode;
}) {
    return (
        <header className="w-full h-16 sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 flex justify-between items-center px-6">
            {children}
        </header>
    );
}