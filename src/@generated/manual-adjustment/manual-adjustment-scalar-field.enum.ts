import { registerEnumType } from '@nestjs/graphql';

export enum ManualAdjustmentScalarFieldEnum {
    manual_adjustment_id = "manual_adjustment_id",
    player_id_r = "player_id_r",
    reason = "reason",
    amount = "amount",
    created_by_r = "created_by_r",
    cdate = "cdate"
}


registerEnumType(ManualAdjustmentScalarFieldEnum, { name: 'ManualAdjustmentScalarFieldEnum', description: undefined })
