import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerWalletCreateInput } from './player-wallet-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePlayerWalletArgs {

    @Field(() => PlayerWalletCreateInput, {nullable:false})
    @Type(() => PlayerWalletCreateInput)
    data!: PlayerWalletCreateInput;
}
