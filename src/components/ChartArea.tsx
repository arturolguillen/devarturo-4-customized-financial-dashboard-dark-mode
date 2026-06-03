import React from "react";
import Card from "./Card";

export default function ChartArea({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="lg:col-span-2">
            <Card>{children}</Card>
        </div>
    );
}