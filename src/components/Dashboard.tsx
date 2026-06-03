import React from "react";

export default function Dashboard({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto w-full space-y-6">
            {children}
        </div>
    );
}