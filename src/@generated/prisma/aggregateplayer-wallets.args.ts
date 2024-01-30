import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_walletsWhereInput } from '../player-wallets/player-wallets-where.input';
import { Type } from 'class-transformer';
import { player_walletsOrderByWithRelationInput } from '../player-wallets/player-wallets-order-by-with-relation.input';
import { player_walletsWhereUniqueInput } from '../player-wallets/player-wallets-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateplayerWalletsArgs {

    @Field(() => player_walletsWhereInput, {nullable:true})
    @Type(() => player_walletsWhereInput)
    where?: player_walletsWhereInput;

    @Field(() => [player_walletsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<player_walletsOrderByWithRelationInput>;

    @Field(() => player_walletsWhereUniqueInput, {nullable:true})
    cursor?: player_walletsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
