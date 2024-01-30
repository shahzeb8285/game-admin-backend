import { registerEnumType } from '@nestjs/graphql';

export enum rebate_status {
    NOT_CALCULATED = "NOT_CALCULATED",
    DISTRIBUTED = "DISTRIBUTED",
    COLLECTED = "COLLECTED"
}


registerEnumType(rebate_status, { name: 'rebate_status', description: undefined })
