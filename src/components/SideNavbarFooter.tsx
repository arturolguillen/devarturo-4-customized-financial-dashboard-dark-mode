import React from "react";

export default function SideNavbarFooter({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="mt-auto pt-6 border-t border-zinc-800">
            {children}
        </div>
    );
}