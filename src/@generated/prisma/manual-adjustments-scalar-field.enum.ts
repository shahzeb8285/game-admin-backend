import { registerEnumType } from '@nestjs/graphql';

export enum Manual_adjustmentsScalarFieldEnum {
    manual_adjustment_id = "manual_adjustment_id",
    player_id = "player_id",
    reason = "reason",
    amount = "amount",
    created_by = "created_by",
    cdate = "cdate"
}


registerEnumType(Manual_adjustmentsScalarFieldEnum, { name: 'Manual_adjustmentsScalarFieldEnum', description: undefined })
