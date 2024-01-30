import { registerEnumType } from '@nestjs/graphql';

export enum Sg_merchants_currenciesScalarFieldEnum {
    sg_merchants_currency_id = "sg_merchants_currency_id",
    merchants_currency_id = "merchants_currency_id",
    merchant_id = "merchant_id",
    currencies = "currencies",
    cdate = "cdate",
    udate = "udate",
    enabled = "enabled"
}


registerEnumType(Sg_merchants_currenciesScalarFieldEnum, { name: 'Sg_merchants_currenciesScalarFieldEnum', description: undefined })
