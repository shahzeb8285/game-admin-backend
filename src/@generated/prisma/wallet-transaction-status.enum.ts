import { registerEnumType } from '@nestjs/graphql';

export enum wallet_transaction_status {
    PENDING = "PENDING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED"
}


registerEnumType(wallet_transaction_status, { name: 'wallet_transaction_status', description: undefined })
