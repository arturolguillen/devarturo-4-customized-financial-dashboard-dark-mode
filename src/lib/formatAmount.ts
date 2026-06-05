export function formatAmount(value: number): string {
    if (!Number.isFinite(value)) {
        return "0";
    }

    if (Math.abs(value) < 1000) {
        return new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(value);
    }

    return `${new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
    }).format(value / 1000)}K`;
}

export function usdFormatter(value: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
}
