import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PlayerWalletScalarWhereWithAggregatesInput {

    @Field(() => [PlayerWalletScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PlayerWalletScalarWhereWithAggregatesInput>;

    @Field(() => [PlayerWalletScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PlayerWalletScalarWhereWithAggregatesInput>;

    @Field(() => [PlayerWalletScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PlayerWalletScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_wallet_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_id_r?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    currency?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    amount?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    frozen_amount?: FloatWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    cdate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    udate?: DateTimeWithAggregatesFilter;
}
