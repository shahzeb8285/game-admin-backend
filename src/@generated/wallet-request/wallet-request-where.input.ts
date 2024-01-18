import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { PlayerRelationFilter } from '../player/player-relation-filter.input';

@InputType()
export class WalletRequestWhereInput {

    @Field(() => [WalletRequestWhereInput], {nullable:true})
    AND?: Array<WalletRequestWhereInput>;

    @Field(() => [WalletRequestWhereInput], {nullable:true})
    OR?: Array<WalletRequestWhereInput>;

    @Field(() => [WalletRequestWhereInput], {nullable:true})
    NOT?: Array<WalletRequestWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    wallet_request_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    t_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id_r?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    amount?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    i_game_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    i_extparam?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    i_rollback?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    i_gamedesc?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    i_action_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    i_reference_action_id?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    round_start?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    round_ended?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    game_extra?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    subtype?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    jackpot_win?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    hmac?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    response?: StringFilter;

    @Field(() => PlayerRelationFilter, {nullable:true})
    players?: PlayerRelationFilter;
}
