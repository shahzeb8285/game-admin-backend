import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_walletsCreateInput } from '../player-wallets/player-wallets-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneplayerWalletsArgs {

    @Field(() => player_walletsCreateInput, {nullable:false})
    @Type(() => player_walletsCreateInput)
    data!: player_walletsCreateInput;
}
