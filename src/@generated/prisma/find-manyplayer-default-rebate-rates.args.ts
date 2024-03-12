import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_default_rebate_ratesWhereInput } from '../player-default-rebate-rates/player-default-rebate-rates-where.input';
import { Type } from 'class-transformer';
import { player_default_rebate_ratesOrderByWithRelationInput } from '../player-default-rebate-rates/player-default-rebate-rates-order-by-with-relation.input';
import { player_default_rebate_ratesWhereUniqueInput } from '../player-default-rebate-rates/player-default-rebate-rates-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Player_default_rebate_ratesScalarFieldEnum } from './player-default-rebate-rates-scalar-field.enum';

@ArgsType()
export class FindManyplayerDefaultRebateRatesArgs {

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

    @Field(() => [Player_default_rebate_ratesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Player_default_rebate_ratesScalarFieldEnum>;
}
