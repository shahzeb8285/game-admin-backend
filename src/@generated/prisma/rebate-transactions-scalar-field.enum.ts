import { registerEnumType } from '@nestjs/graphql';

export enum Rebate_transactionsScalarFieldEnum {
    rebate_transaction_id = "rebate_transaction_id",
    player_id = "player_id",
    amount = "amount",
    cdate = "cdate",
    bonus_type = "bonus_type",
    description = "description"
}


registerEnumType(Rebate_transactionsScalarFieldEnum, { name: 'Rebate_transactionsScalarFieldEnum', description: undefined })
