import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_walletsCreateManyPlayersInput } from './player-wallets-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class player_walletsCreateManyPlayersInputEnvelope {

    @Field(() => [player_walletsCreateManyPlayersInput], {nullable:false})
    @Type(() => player_walletsCreateManyPlayersInput)
    data!: Array<player_walletsCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
