export default function MainWrapper({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex-1 flex flex-col min-w-0 bg-zinc-950 overflow-x-hidden">
            {children}
        </main>
    );
}