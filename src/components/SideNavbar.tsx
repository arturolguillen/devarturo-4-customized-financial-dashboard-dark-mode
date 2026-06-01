export default function SideNavbar({ children }: {
    children: React.ReactNode;
}) {
    return (
        <aside className="bg-zinc-950 h-screen w-64 flex-col hidden lg:flex sticky top-0 left-0 border-r border-zinc-800 py-6 px-4">
            {children}
        </aside>
    );
}