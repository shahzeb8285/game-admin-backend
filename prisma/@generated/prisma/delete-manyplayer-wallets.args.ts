import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_walletsWhereInput } from '../player-wallets/player-wallets-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyplayerWalletsArgs {

    @Field(() => player_walletsWhereInput, {nullable:true})
    @Type(() => player_walletsWhereInput)
    where?: player_walletsWhereInput;
}
