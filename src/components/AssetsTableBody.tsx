import { v4 as uuidv4 } from "uuid";
import BitcoinIcon from "./BitcoinIcon";
import EthereumIcon from "./EthereumIcon";
import SolanaIcon from "./SolanaIcon";
import AssetsTableRow from "./AssetsTableRow";

export type AssetItem = {
    id: string;
    icon: React.ReactNode;
    coin: string;
    coin_currency: string;
    price: number;
    exchange: string;
    exchange_type: "up" | "down";
    balance: number;
    value_usd: number;
};

const assetItems: AssetItem[] = [
    {
        id: uuidv4(),
        icon: <BitcoinIcon />,
        coin: 'Bitcoin',
        coin_currency: 'BTC',
        price: 68432.10,
        exchange: '2.45%',
        exchange_type: 'up',
        balance: 1.240,
        value_usd: 84855.80,
    },
    {
        id: uuidv4(),
        icon: <EthereumIcon />,
        coin: 'Ethereum',
        coin_currency: 'ETH',
        price: 2451.90,
        exchange: '1.12%',
        exchange_type: 'down',
        balance: 12.50,
        value_usd: 30648.75,
    },
    {
        id: uuidv4(),
        icon: <SolanaIcon />,
        coin: 'Solana',
        coin_currency: 'SOL',
        price: 162.15,
        exchange: '8.12%',
        exchange_type: 'up',
        balance: 56.00,
        value_usd: 9080.40,
    },
];

export default function AssetsTableBody() {
    return (
        <tbody className="divide-y divide-zinc-800">
            {assetItems.map(item => <AssetsTableRow key={item.id} item={item} />)}
        </tbody>
    );
}