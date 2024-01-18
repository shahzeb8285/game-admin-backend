import { registerEnumType } from '@nestjs/graphql';

export enum WithdrawalTransactionScalarFieldEnum {
    withdrawal_transaction_id = "withdrawal_transaction_id",
    player_id_r = "player_id_r",
    amount = "amount",
    currency = "currency",
    request_time = "request_time",
    process_time = "process_time",
    processed_by = "processed_by",
    transaction_date = "transaction_date",
    status = "status",
    admin_bank_account_id_r = "admin_bank_account_id_r"
}


registerEnumType(WithdrawalTransactionScalarFieldEnum, { name: 'WithdrawalTransactionScalarFieldEnum', description: undefined })
