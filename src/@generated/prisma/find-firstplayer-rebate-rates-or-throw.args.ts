import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_rebate_ratesWhereInput } from '../player-rebate-rates/player-rebate-rates-where.input';
import { Type } from 'class-transformer';
import { player_rebate_ratesOrderByWithRelationInput } from '../player-rebate-rates/player-rebate-rates-order-by-with-relation.input';
import { player_rebate_ratesWhereUniqueInput } from '../player-rebate-rates/player-rebate-rates-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Player_rebate_ratesScalarFieldEnum } from './player-rebate-rates-scalar-field.enum';

@ArgsType()
export class FindFirstplayerRebateRatesOrThrowArgs {

    @Field(() => player_rebate_ratesWhereInput, {nullable:true})
    @Type(() => player_rebate_ratesWhereInput)
    where?: player_rebate_ratesWhereInput;

    @Field(() => [player_rebate_ratesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<player_rebate_ratesOrderByWithRelationInput>;

    @Field(() => player_rebate_ratesWhereUniqueInput, {nullable:true})
    cursor?: player_rebate_ratesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Player_rebate_ratesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Player_rebate_ratesScalarFieldEnum>;
}
