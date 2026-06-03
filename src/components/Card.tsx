import React from "react";

export default function Card({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-zinc-900 rounded-2xl p-5 flex flex-col gap-2 border border-zinc-800 ring-1 ring-emerald-500/10 shadow-lg shadow-emerald-950/20 animate-float">
            {children}
        </div>
    );
}