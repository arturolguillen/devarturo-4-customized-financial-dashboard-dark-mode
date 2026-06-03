import type { Transaction } from "@/lib/transactions";
import { ArrowRightLeft, MoveDownLeft, MoveUpRight } from "lucide-react";

export default function TransactionListItem({ transaction }: {
    transaction: Transaction;
}) {
    const { type, title, timestamp, amount, currency, balance } = transaction;

    return (
        <div>
            <div>
                {type === 'income' && <MoveDownLeft />}
                {type === 'expense' && <MoveUpRight />}
                {type === 'swap' && <ArrowRightLeft />}
            </div>
            <div>
                <p>{title}</p>
                <p>{timestamp}</p>
            </div>
            <div>
                <p>
                    {type === 'income' && '+'}
                    {type === 'expense' && '-'}
                    {amount} {currency}
                </p>
                <p>
                    {balance}
                </p>
            </div>
        </div>
    );
}