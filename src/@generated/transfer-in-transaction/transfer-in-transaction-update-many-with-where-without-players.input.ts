import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransferInTransactionScalarWhereInput } from './transfer-in-transaction-scalar-where.input';
import { Type } from 'class-transformer';
import { TransferInTransactionUpdateManyMutationInput } from './transfer-in-transaction-update-many-mutation.input';

@InputType()
export class TransferInTransactionUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => TransferInTransactionScalarWhereInput, {nullable:false})
    @Type(() => TransferInTransactionScalarWhereInput)
    where!: TransferInTransactionScalarWhereInput;

    @Field(() => TransferInTransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => TransferInTransactionUpdateManyMutationInput)
    data!: TransferInTransactionUpdateManyMutationInput;
}
