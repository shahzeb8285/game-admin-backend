import { registerEnumType } from '@nestjs/graphql';

export enum Player_login_logsScalarFieldEnum {
    player_login_log_id = "player_login_log_id",
    player_id = "player_id",
    ip = "ip",
    login_time = "login_time"
}


registerEnumType(Player_login_logsScalarFieldEnum, { name: 'Player_login_logsScalarFieldEnum', description: undefined })
