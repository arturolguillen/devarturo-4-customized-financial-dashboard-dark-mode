import transactions from "@/lib/transactions";
import TransactionListItem from "./TransactionListItem";

export default function TransactionList() {
    return (
        <div className="space-y-4 flex-1">
            {transactions.map(transaction => (
                <TransactionListItem
                    transaction={transaction}
                    key={transaction.id}
                />
            ))}
        </div>
    );
}