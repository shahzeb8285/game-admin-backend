import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWalletScalarWhereInput } from './player-wallet-scalar-where.input';
import { Type } from 'class-transformer';
import { PlayerWalletUpdateManyMutationInput } from './player-wallet-update-many-mutation.input';

@InputType()
export class PlayerWalletUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => PlayerWalletScalarWhereInput, {nullable:false})
    @Type(() => PlayerWalletScalarWhereInput)
    where!: PlayerWalletScalarWhereInput;

    @Field(() => PlayerWalletUpdateManyMutationInput, {nullable:false})
    @Type(() => PlayerWalletUpdateManyMutationInput)
    data!: PlayerWalletUpdateManyMutationInput;
}
