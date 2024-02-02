import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_walletsWhereInput } from '../player-wallets/player-wallets-where.input';

@InputType()
export class Player_walletsListRelationFilter {

    @Field(() => player_walletsWhereInput, {nullable:true})
    every?: player_walletsWhereInput;

    @Field(() => player_walletsWhereInput, {nullable:true})
    some?: player_walletsWhereInput;

    @Field(() => player_walletsWhereInput, {nullable:true})
    none?: player_walletsWhereInput;
}
