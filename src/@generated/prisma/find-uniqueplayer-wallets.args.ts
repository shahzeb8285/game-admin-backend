import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_walletsWhereUniqueInput } from '../player-wallets/player-wallets-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueplayerWalletsArgs {

    @Field(() => player_walletsWhereUniqueInput, {nullable:false})
    @Type(() => player_walletsWhereUniqueInput)
    where!: player_walletsWhereUniqueInput;
}
