import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PlayersRelationFilter } from '../prisma/players-relation-filter.input';

@InputType()
export class wallet_requestsWhereInput {

    @Field(() => [wallet_requestsWhereInput], {nullable:true})
    AND?: Array<wallet_requestsWhereInput>;

    @Field(() => [wallet_requestsWhereInput], {nullable:true})
    OR?: Array<wallet_requestsWhereInput>;

    @Field(() => [wallet_requestsWhereInput], {nullable:true})
    NOT?: Array<wallet_requestsWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    wallet_request_id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    tid?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    amount?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    i_game_id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    i_extparam?: StringNullableFilter;

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

    @Field(() => StringNullableFilter, {nullable:true})
    game_extra?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    subtype?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    jackpot_win?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    hmac?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    response?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => PlayersRelationFilter, {nullable:true})
    players?: PlayersRelationFilter;
}
