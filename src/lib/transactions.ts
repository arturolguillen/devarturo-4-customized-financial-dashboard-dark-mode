import { v4 as uuidv4 } from "uuid";

export type Transaction = {
    id: string;
    type: "income" | "expense" | "swap";
    title: string;
    amount: number;
    currency: string;
    timestamp: string;
    balance: number;
};

const transactions: Transaction[] = [
    {
        id: uuidv4(),
        type: 'income',
        title: 'Recibido BTC',
        amount: 0.00024,
        currency: 'BTC',
        timestamp: 'Hace 2 horas - Completado',
        balance: 162.40,
    },
    {
        id: uuidv4(),
        type: 'expense',
        title: 'Enviado ETH',
        amount: 0.45,
        currency: 'ETH',
        timestamp: 'Hace 5 horas - Completado',
        balance: 1120,
    },
    {
        id: uuidv4(),
        type: 'swap',
        title: 'Swap SOL x USDC',
        amount: 15.0,
        currency: 'SOL',
        timestamp: 'Ayer - Completado',
        balance: 2450.10,
    },
];

export default transactions;