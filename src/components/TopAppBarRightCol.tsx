export default function TopAppBarRightCol({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-center gap-4">
            {children}
        </div>
    );
}