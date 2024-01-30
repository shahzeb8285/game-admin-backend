import { registerEnumType } from '@nestjs/graphql';

export enum PlayersScalarFieldEnum {
    player_id = "player_id",
    name = "name",
    tg_id = "tg_id",
    tg_first_name = "tg_first_name",
    tg_last_name = "tg_last_name",
    tg_username = "tg_username",
    tg_photo_url = "tg_photo_url",
    user_language = "user_language",
    registration_ip = "registration_ip",
    agent_id = "agent_id",
    registration_date = "registration_date",
    password = "password",
    fundist_password = "fundist_password",
    cdate = "cdate",
    udate = "udate",
    enabled = "enabled"
}


registerEnumType(PlayersScalarFieldEnum, { name: 'PlayersScalarFieldEnum', description: undefined })
