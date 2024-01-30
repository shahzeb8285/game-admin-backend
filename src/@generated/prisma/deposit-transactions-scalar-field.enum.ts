import { registerEnumType } from '@nestjs/graphql';

export enum Deposit_transactionsScalarFieldEnum {
    deposit_transaction_id = "deposit_transaction_id",
    player_id = "player_id",
    transaction_currency = "transaction_currency",
    transaction_amount = "transaction_amount",
    game_currency = "game_currency",
    game_amount = "game_amount",
    admin_bank_account_id = "admin_bank_account_id",
    transaction_date = "transaction_date",
    player_remarks = "player_remarks",
    comment = "comment",
    processed_by = "processed_by",
    process_time = "process_time",
    status = "status",
    cdate = "cdate",
    udate = "udate"
}


registerEnumType(Deposit_transactionsScalarFieldEnum, { name: 'Deposit_transactionsScalarFieldEnum', description: undefined })
