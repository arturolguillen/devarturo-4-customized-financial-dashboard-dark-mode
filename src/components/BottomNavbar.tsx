import clsx from "clsx";
import { ArrowRightLeft, House, Settings, Wallet } from "lucide-react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const navbarItems = [
    {
        id: uuidv4(),
        text: 'Inicio',
        icon: <House size={18} />,
        active: true,
    },
    {
        id: uuidv4(),
        text: 'Cartera',
        icon: <Wallet size={18} />,
        active: false,
    },
    {
        id: uuidv4(),
        text: 'Trade',
        icon: <ArrowRightLeft size={18} />,
        active: false,
    },
    {
        id: uuidv4(),
        text: 'Ajustes',
        icon: <Settings size={18} />,
        active: false,
    },
];

export default function BottomNavbar() {
    return (
        <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-3 pt-3 bg-zinc-950/90 backdrop-blur-lg border-t border-zinc-800 lg:hidden shadow-2xl">
            {navbarItems.map(item => (
                <Link
                    href={'#'}
                    key={item.id}
                    className={clsx({
                        'flex flex-col items-center justify-center rounded-xl px-4 py-1.5 transition-all gap-1': true,
                        'text-zinc-500 hover:text-zinc-300 active:scale-90': !item.active,
                        'text-emerald-500 bg-emerald-500/10': item.active
                    })}
                >
                    {item.icon}
                    <span className="text-[9px] font-black uppercase tracking-tighter">{item.text}</span>
                </Link>
            ))}
        </nav>
    );
}