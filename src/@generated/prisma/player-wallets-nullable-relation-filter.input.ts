import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_walletsWhereInput } from '../player-wallets/player-wallets-where.input';

@InputType()
export class Player_walletsNullableRelationFilter {

    @Field(() => player_walletsWhereInput, {nullable:true})
    is?: player_walletsWhereInput;

    @Field(() => player_walletsWhereInput, {nullable:true})
    isNot?: player_walletsWhereInput;
}
