import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_walletsUpdateManyMutationInput } from '../player-wallets/player-wallets-update-many-mutation.input';
import { Type } from 'class-transformer';
import { player_walletsWhereInput } from '../player-wallets/player-wallets-where.input';

@ArgsType()
export class UpdateManyplayerWalletsArgs {

    @Field(() => player_walletsUpdateManyMutationInput, {nullable:false})
    @Type(() => player_walletsUpdateManyMutationInput)
    data!: player_walletsUpdateManyMutationInput;

    @Field(() => player_walletsWhereInput, {nullable:true})
    @Type(() => player_walletsWhereInput)
    where?: player_walletsWhereInput;
}
