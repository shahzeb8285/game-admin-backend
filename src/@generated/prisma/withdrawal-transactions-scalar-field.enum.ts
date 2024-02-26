import { registerEnumType } from '@nestjs/graphql';

export enum Withdrawal_transactionsScalarFieldEnum {
    withdrawal_transaction_id = "withdrawal_transaction_id",
    player_id = "player_id",
    transaction_currency = "transaction_currency",
    transaction_amount = "transaction_amount",
    game_currency = "game_currency",
    game_amount = "game_amount",
    player_bank_account_id = "player_bank_account_id",
    trans_date = "trans_date",
    player_remarks = "player_remarks",
    comment = "comment",
    processed_by = "processed_by",
    process_time = "process_time",
    status = "status",
    cdate = "cdate",
    udate = "udate"
}


registerEnumType(Withdrawal_transactionsScalarFieldEnum, { name: 'Withdrawal_transactionsScalarFieldEnum', description: undefined })
