import { registerEnumType } from '@nestjs/graphql';

export enum Wallet_requestsScalarFieldEnum {
    wallet_request_id = "wallet_request_id",
    tid = "tid",
    type = "type",
    player_id = "player_id",
    currency = "currency",
    amount = "amount",
    i_game_id = "i_game_id",
    i_extparam = "i_extparam",
    i_rollback = "i_rollback",
    i_gamedesc = "i_gamedesc",
    i_action_id = "i_action_id",
    i_reference_action_id = "i_reference_action_id",
    round_start = "round_start",
    round_ended = "round_ended",
    game_extra = "game_extra",
    subtype = "subtype",
    jackpot_win = "jackpot_win",
    hmac = "hmac",
    response = "response",
    cdate = "cdate"
}


registerEnumType(Wallet_requestsScalarFieldEnum, { name: 'Wallet_requestsScalarFieldEnum', description: undefined })
