import { registerEnumType } from '@nestjs/graphql';

export enum ManualAdjustmentScalarFieldEnum {
    manual_adjustment_id = "manual_adjustment_id",
    player_id = "player_id",
    reason = "reason",
    amount = "amount",
    created_by = "created_by",
    cdate = "cdate"
}


registerEnumType(ManualAdjustmentScalarFieldEnum, { name: 'ManualAdjustmentScalarFieldEnum', description: undefined })
