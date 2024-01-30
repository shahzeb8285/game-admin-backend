import { registerEnumType } from '@nestjs/graphql';

export enum Exchange_ratesScalarFieldEnum {
    exchange_rate_id = "exchange_rate_id",
    real_currency = "real_currency",
    game_currency = "game_currency",
    game_per_real = "game_per_real",
    cdate = "cdate",
    udate = "udate",
    enabled = "enabled"
}


registerEnumType(Exchange_ratesScalarFieldEnum, { name: 'Exchange_ratesScalarFieldEnum', description: undefined })
