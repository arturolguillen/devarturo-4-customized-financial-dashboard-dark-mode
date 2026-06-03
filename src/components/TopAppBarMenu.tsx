import clsx from "clsx";
import Link from "next/link";

const menuItems = [
    {
        text: 'Resumen',
        active: true,
    },
    {
        text: 'Noticias',
        active: false,
    },
    {
        text: 'Alertas',
        active: false,
    }
];

export default function TopAppBarMenu() {
    return (
        <nav className="hidden xl:flex gap-6">
            {menuItems.map(item => (
                <Link
                    href={'#'}
                    key={item.text}
                    className={clsx({
                        'text-xs': true,
                        'text-zinc-400 hover:text-emerald-500 transition-colors': !item.active,
                        'text-emerald-500 font-bold border-b-2 border-emerald-500 pb-1': item.active,
                    })}
                >
                    {item.text}
                </Link>
            ))}
        </nav>
    );
}