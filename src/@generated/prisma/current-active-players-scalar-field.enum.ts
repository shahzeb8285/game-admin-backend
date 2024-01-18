import { registerEnumType } from '@nestjs/graphql';

export enum Current_active_playersScalarFieldEnum {
    player_id_r = "player_id_r",
    last_active_time = "last_active_time"
}


registerEnumType(Current_active_playersScalarFieldEnum, { name: 'Current_active_playersScalarFieldEnum', description: undefined })
