import { registerEnumType } from '@nestjs/graphql';

export enum PlayerLoginLogScalarFieldEnum {
    player_id_r = "player_id_r",
    ip = "ip",
    login_time = "login_time"
}


registerEnumType(PlayerLoginLogScalarFieldEnum, { name: 'PlayerLoginLogScalarFieldEnum', description: undefined })
