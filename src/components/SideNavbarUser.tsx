import { User } from "lucide-react";

export default function SideNavbarUser() {
    return (
        <div className="flex items-center gap-3 mb-6 px-2">
            <div className="size-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                <User />
            </div>
            <div className="flex flex-col">
                <span className="text-xs font-bold text-zinc-100">{'Devarturo'}</span>
                <span className="text-[10px] text-zinc-500">{'ID: 882910'}</span>
            </div>
        </div>
    );
}