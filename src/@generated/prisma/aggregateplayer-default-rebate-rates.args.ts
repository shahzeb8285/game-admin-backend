import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_default_rebate_ratesWhereInput } from '../player-default-rebate-rates/player-default-rebate-rates-where.input';
import { Type } from 'class-transformer';
import { player_default_rebate_ratesOrderByWithRelationInput } from '../player-default-rebate-rates/player-default-rebate-rates-order-by-with-relation.input';
import { player_default_rebate_ratesWhereUniqueInput } from '../player-default-rebate-rates/player-default-rebate-rates-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateplayerDefaultRebateRatesArgs {

    @Field(() => player_default_rebate_ratesWhereInput, {nullable:true})
    @Type(() => player_default_rebate_ratesWhereInput)
    where?: player_default_rebate_ratesWhereInput;

    @Field(() => [player_default_rebate_ratesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<player_default_rebate_ratesOrderByWithRelationInput>;

    @Field(() => player_default_rebate_ratesWhereUniqueInput, {nullable:true})
    cursor?: player_default_rebate_ratesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
