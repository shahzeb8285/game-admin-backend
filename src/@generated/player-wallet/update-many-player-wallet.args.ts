import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerWalletUpdateManyMutationInput } from './player-wallet-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PlayerWalletWhereInput } from './player-wallet-where.input';

@ArgsType()
export class UpdateManyPlayerWalletArgs {

    @Field(() => PlayerWalletUpdateManyMutationInput, {nullable:false})
    @Type(() => PlayerWalletUpdateManyMutationInput)
    data!: PlayerWalletUpdateManyMutationInput;

    @Field(() => PlayerWalletWhereInput, {nullable:true})
    @Type(() => PlayerWalletWhereInput)
    where?: PlayerWalletWhereInput;
}
