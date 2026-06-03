import React from "react"
import Card from "./Card";

export default function Transactions({ children }: {
    children: React.ReactNode;
}) {
    return (
        <Card>
            {children}
        </Card>
    );
}