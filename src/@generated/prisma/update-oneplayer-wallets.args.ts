import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_walletsUpdateInput } from '../player-wallets/player-wallets-update.input';
import { Type } from 'class-transformer';
import { player_walletsWhereUniqueInput } from '../player-wallets/player-wallets-where-unique.input';

@ArgsType()
export class UpdateOneplayerWalletsArgs {

    @Field(() => player_walletsUpdateInput, {nullable:false})
    @Type(() => player_walletsUpdateInput)
    data!: player_walletsUpdateInput;

    @Field(() => player_walletsWhereUniqueInput, {nullable:false})
    @Type(() => player_walletsWhereUniqueInput)
    where!: player_walletsWhereUniqueInput;
}
