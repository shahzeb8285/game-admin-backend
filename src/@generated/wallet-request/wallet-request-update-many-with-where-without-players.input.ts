import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletRequestScalarWhereInput } from './wallet-request-scalar-where.input';
import { Type } from 'class-transformer';
import { WalletRequestUpdateManyMutationInput } from './wallet-request-update-many-mutation.input';

@InputType()
export class WalletRequestUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => WalletRequestScalarWhereInput, {nullable:false})
    @Type(() => WalletRequestScalarWhereInput)
    where!: WalletRequestScalarWhereInput;

    @Field(() => WalletRequestUpdateManyMutationInput, {nullable:false})
    @Type(() => WalletRequestUpdateManyMutationInput)
    data!: WalletRequestUpdateManyMutationInput;
}
