import { Box } from "lucide-react";

export default function SideNavbarLogo() {
    return (
        <div className="flex items-center gap-3 mb-10 px-2">
            <div className="size-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Box size={20} className="text-zinc-950" />
            </div>
            <h1 className="text-xl font-bold text-emerald-500 tracking-tight">{'CryptoFlow'}</h1>
        </div>
    );
}