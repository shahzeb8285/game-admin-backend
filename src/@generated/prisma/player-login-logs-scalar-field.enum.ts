import { registerEnumType } from '@nestjs/graphql';

export enum Player_login_logsScalarFieldEnum {
    player_id_r = "player_id_r",
    ip = "ip",
    login_time = "login_time"
}


registerEnumType(Player_login_logsScalarFieldEnum, { name: 'Player_login_logsScalarFieldEnum', description: undefined })
