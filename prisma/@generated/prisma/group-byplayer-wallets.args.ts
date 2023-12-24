import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_walletsWhereInput } from '../player-wallets/player-wallets-where.input';
import { Type } from 'class-transformer';
import { player_walletsOrderByWithAggregationInput } from '../player-wallets/player-wallets-order-by-with-aggregation.input';
import { Player_walletsScalarFieldEnum } from './player-wallets-scalar-field.enum';
import { player_walletsScalarWhereWithAggregatesInput } from '../player-wallets/player-wallets-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByplayerWalletsArgs {

    @Field(() => player_walletsWhereInput, {nullable:true})
    @Type(() => player_walletsWhereInput)
    where?: player_walletsWhereInput;

    @Field(() => [player_walletsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<player_walletsOrderByWithAggregationInput>;

    @Field(() => [Player_walletsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Player_walletsScalarFieldEnum>;

    @Field(() => player_walletsScalarWhereWithAggregatesInput, {nullable:true})
    having?: player_walletsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}