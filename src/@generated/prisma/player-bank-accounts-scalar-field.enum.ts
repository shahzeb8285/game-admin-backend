import { registerEnumType } from '@nestjs/graphql';

export enum Player_bank_accountsScalarFieldEnum {
    player_bank_account_id = "player_bank_account_id",
    player_id = "player_id",
    bank_name = "bank_name",
    account_number = "account_number",
    holder_name = "holder_name",
    method = "method",
    cdate = "cdate",
    udate = "udate",
    enabled = "enabled"
}


registerEnumType(Player_bank_accountsScalarFieldEnum, { name: 'Player_bank_accountsScalarFieldEnum', description: undefined })
