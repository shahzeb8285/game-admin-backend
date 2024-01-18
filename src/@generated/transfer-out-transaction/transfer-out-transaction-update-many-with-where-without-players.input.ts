import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransferOutTransactionScalarWhereInput } from './transfer-out-transaction-scalar-where.input';
import { Type } from 'class-transformer';
import { TransferOutTransactionUpdateManyMutationInput } from './transfer-out-transaction-update-many-mutation.input';

@InputType()
export class TransferOutTransactionUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => TransferOutTransactionScalarWhereInput, {nullable:false})
    @Type(() => TransferOutTransactionScalarWhereInput)
    where!: TransferOutTransactionScalarWhereInput;

    @Field(() => TransferOutTransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => TransferOutTransactionUpdateManyMutationInput)
    data!: TransferOutTransactionUpdateManyMutationInput;
}
