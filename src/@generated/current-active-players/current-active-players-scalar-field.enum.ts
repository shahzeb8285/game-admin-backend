import { registerEnumType } from '@nestjs/graphql';

export enum CurrentActivePlayersScalarFieldEnum {
    player_id_r = "player_id_r",
    last_active_time = "last_active_time"
}


registerEnumType(CurrentActivePlayersScalarFieldEnum, { name: 'CurrentActivePlayersScalarFieldEnum', description: undefined })
