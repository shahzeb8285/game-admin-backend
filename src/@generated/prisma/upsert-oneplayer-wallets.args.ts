import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_walletsWhereUniqueInput } from '../player-wallets/player-wallets-where-unique.input';
import { Type } from 'class-transformer';
import { player_walletsCreateInput } from '../player-wallets/player-wallets-create.input';
import { player_walletsUpdateInput } from '../player-wallets/player-wallets-update.input';

@ArgsType()
export class UpsertOneplayerWalletsArgs {

    @Field(() => player_walletsWhereUniqueInput, {nullable:false})
    @Type(() => player_walletsWhereUniqueInput)
    where!: player_walletsWhereUniqueInput;

    @Field(() => player_walletsCreateInput, {nullable:false})
    @Type(() => player_walletsCreateInput)
    create!: player_walletsCreateInput;

    @Field(() => player_walletsUpdateInput, {nullable:false})
    @Type(() => player_walletsUpdateInput)
    update!: player_walletsUpdateInput;
}
