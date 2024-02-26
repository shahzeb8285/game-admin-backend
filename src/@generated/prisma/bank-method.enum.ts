import { registerEnumType } from '@nestjs/graphql';

export enum bank_method {
    FPS = "FPS",
    BANK = "BANK",
    USDT = "USDT"
}


registerEnumType(bank_method, { name: 'bank_method', description: undefined })
