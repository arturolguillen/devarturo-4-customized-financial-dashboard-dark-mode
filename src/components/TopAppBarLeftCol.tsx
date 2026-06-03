import React from "react";

export default function TopAppBarLeftCol({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-center gap-6 flex-1">
            {children}
        </div>
    );
}