import Card from "./Card";

export default function ChartArea({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="xl:col-span-2 xl:[&>div]:h-full">
            <Card>{children}</Card>
        </div>
    );
}