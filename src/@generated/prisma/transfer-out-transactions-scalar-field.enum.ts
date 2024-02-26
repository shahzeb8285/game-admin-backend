import { registerEnumType } from '@nestjs/graphql';

export enum Transfer_out_transactionsScalarFieldEnum {
    transfer_out_transaction_id = "transfer_out_transaction_id",
    player_id = "player_id",
    transaction_currency = "transaction_currency",
    transaction_amount = "transaction_amount",
    game_currency = "game_currency",
    game_amount = "game_amount",
    counterpart_platform = "counterpart_platform",
    counterpart_username = "counterpart_username",
    trans_date = "trans_date",
    player_remarks = "player_remarks",
    comment = "comment",
    processed_by = "processed_by",
    process_time = "process_time",
    status = "status",
    cdate = "cdate",
    udate = "udate"
}


registerEnumType(Transfer_out_transactionsScalarFieldEnum, { name: 'Transfer_out_transactionsScalarFieldEnum', description: undefined })
