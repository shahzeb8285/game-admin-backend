import { registerEnumType } from '@nestjs/graphql';

export enum bank_method {
    FPS = "FPS",
    BANK = "BANK"
}


registerEnumType(bank_method, { name: 'bank_method', description: undefined })
