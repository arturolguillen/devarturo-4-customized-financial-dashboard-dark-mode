import {
    LayoutDashboard,
    ChartNoAxesColumn,
    Wallet,
    ScrollText,
    TrendingUp,
    Settings
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const menuItems = [
    {
        icon: <LayoutDashboard />,
        text: 'Panel',
        active: true,
    },
    {
        icon: <ChartNoAxesColumn />,
        text: 'Mercados',
        active: false,
    },
    {
        icon: <Wallet />,
        text: 'Cartera',
        active: false,
    },
    {
        icon: <ScrollText />,
        text: 'Transacciones',
        active: false,
    },
    {
        icon: <TrendingUp />,
        text: 'Análisis',
        active: false,
    },
    {
        icon: <Settings />,
        text: 'Configuración',
        active: false,
    },
];

export default function SideNarbarMenu() {
    return (
        <nav className="flex-1 space-y-1">
            {menuItems.map(item => (
                <Link
                    href={'#'}
                    key={item.text}
                    className={clsx({
                        'flex items-center gap-3 p-3 hover:bg-zinc-900 hover:text-zinc-100 transition-colors': true,
                        'text-zinc-400 rounded-lg': !item.active,
                        'text-emerald-400 font-bold border-r-2 border-emerald-500 bg-zinc-900 rounded-l-lg': item.active,
                    })}
                >
                    {item.icon}
                    <span className="text-sm">{item.text}</span>
                </Link>
            ))
            }
        </nav >
    );
}