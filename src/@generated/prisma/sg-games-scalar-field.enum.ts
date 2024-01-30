import { registerEnumType } from '@nestjs/graphql';

export enum Sg_gamesScalarFieldEnum {
    sg_game_id = "sg_game_id",
    game_id = "game_id",
    url = "url",
    game_name = "game_name",
    image = "image",
    category_id = "category_id",
    merchant_id = "merchant_id",
    sort = "sort",
    page_code = "page_code",
    mobile_page_code = "mobile_page_code",
    rtp = "rtp",
    coun_rest_id = "coun_rest_id",
    external_code = "external_code",
    mobile_external_code = "mobile_external_code",
    table_id = "table_id",
    has_demo = "has_demo",
    freeround = "freeround",
    bonus_buy = "bonus_buy",
    megaways = "megaways",
    freespins = "freespins",
    min_bet_default = "min_bet_default",
    max_bet_default = "max_bet_default",
    max_multiplier = "max_multiplier",
    cdate = "cdate",
    udate = "udate",
    enabled = "enabled"
}


registerEnumType(Sg_gamesScalarFieldEnum, { name: 'Sg_gamesScalarFieldEnum', description: undefined })
