
export type TokenType =
| "balance_eth"
| "balance_usdt_erc"
| "balance_usdt_bep"
| "balance_usdt_arb"
| "balance_usdt_polygon"
| "balance_usdt_trc"
| "balance_usdt_optimism";

export type WalletType = "erc" | "trc";

export interface ITransferPayload {
token_field: TokenType;
amount: number;
wallet_type: WalletType;
}