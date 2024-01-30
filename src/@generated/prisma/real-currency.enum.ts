import { registerEnumType } from '@nestjs/graphql';

export enum real_currency {
    HKD = "HKD",
    USDT = "USDT"
}


registerEnumType(real_currency, { name: 'real_currency', description: undefined })
