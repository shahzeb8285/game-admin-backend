import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PlayerRelationFilter } from '../player/player-relation-filter.input';

@InputType()
export class PlayerWalletWhereInput {

    @Field(() => [PlayerWalletWhereInput], {nullable:true})
    AND?: Array<PlayerWalletWhereInput>;

    @Field(() => [PlayerWalletWhereInput], {nullable:true})
    OR?: Array<PlayerWalletWhereInput>;

    @Field(() => [PlayerWalletWhereInput], {nullable:true})
    NOT?: Array<PlayerWalletWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    player_wallet_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id_r?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    frozen_amount?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => PlayerRelationFilter, {nullable:true})
    players?: PlayerRelationFilter;
}
