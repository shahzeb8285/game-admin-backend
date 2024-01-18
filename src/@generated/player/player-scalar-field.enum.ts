import { registerEnumType } from '@nestjs/graphql';

export enum PlayerScalarFieldEnum {
    player_id = "player_id",
    name = "name",
    tg_id = "tg_id",
    tg_first_name = "tg_first_name",
    tg_last_name = "tg_last_name",
    tg_user_name = "tg_user_name",
    tg_photo_url = "tg_photo_url",
    user_language = "user_language",
    registration_ip = "registration_ip",
    agent_id_r = "agent_id_r",
    cdate = "cdate",
    udate = "udate",
    enabled = "enabled",
    registration_date = "registration_date"
}


registerEnumType(PlayerScalarFieldEnum, { name: 'PlayerScalarFieldEnum', description: undefined })
