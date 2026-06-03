import { CircleQuestionMark } from "lucide-react";
import Link from "next/link";

export default function SideNavbarSupportLink() {
    return (
        <Link
            href={'#'}
            className="flex items-center gap-3 p-3 mt-4 text-zinc-400 hover:text-zinc-100 transition-colors"
        >
            <CircleQuestionMark />
            <span className="text-sm">{'Soporte'}</span>
        </Link>
    );
}