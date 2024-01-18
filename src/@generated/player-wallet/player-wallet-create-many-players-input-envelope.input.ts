import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWalletCreateManyPlayersInput } from './player-wallet-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class PlayerWalletCreateManyPlayersInputEnvelope {

    @Field(() => [PlayerWalletCreateManyPlayersInput], {nullable:false})
    @Type(() => PlayerWalletCreateManyPlayersInput)
    data!: Array<PlayerWalletCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
