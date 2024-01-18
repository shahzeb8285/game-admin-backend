import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_walletsCreateManyInput } from '../player-wallets/player-wallets-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyplayerWalletsArgs {

    @Field(() => [player_walletsCreateManyInput], {nullable:false})
    @Type(() => player_walletsCreateManyInput)
    data!: Array<player_walletsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
