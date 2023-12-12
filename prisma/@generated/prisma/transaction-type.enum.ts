import { registerEnumType } from '@nestjs/graphql';

export enum TransactionType {
    PENDING = "PENDING",
    REJECTED = "REJECTED",
    SUCCESS = "SUCCESS"
}


registerEnumType(TransactionType, { name: 'TransactionType', description: undefined })
