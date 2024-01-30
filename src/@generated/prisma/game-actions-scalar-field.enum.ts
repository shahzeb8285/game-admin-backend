import { registerEnumType } from '@nestjs/graphql';

export enum Game_actionsScalarFieldEnum {
    game_action_id = "game_action_id",
    actid = "actid",
    type = "type",
    amount = "amount",
    timestamp = "timestamp",
    game_round_info_id = "game_round_info_id"
}


registerEnumType(Game_actionsScalarFieldEnum, { name: 'Game_actionsScalarFieldEnum', description: undefined })
