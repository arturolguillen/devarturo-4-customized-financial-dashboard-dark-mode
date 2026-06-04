export default function AssetsTable({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                {children}
            </table>
        </div>
    );
}