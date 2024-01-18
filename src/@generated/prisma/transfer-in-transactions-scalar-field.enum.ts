import { registerEnumType } from '@nestjs/graphql';

export enum Transfer_in_transactionsScalarFieldEnum {
    transfer_in_Transaction_id = "transfer_in_Transaction_id",
    player_id_r = "player_id_r",
    amount = "amount",
    currency = "currency",
    request_time = "request_time",
    process_time = "process_time",
    processed_by = "processed_by",
    transaction_date = "transaction_date",
    status = "status",
    counterpart_platform = "counterpart_platform",
    counterpart_username = "counterpart_username"
}


registerEnumType(Transfer_in_transactionsScalarFieldEnum, { name: 'Transfer_in_transactionsScalarFieldEnum', description: undefined })
