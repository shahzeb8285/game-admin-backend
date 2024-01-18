import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransferOutTransactionUpdateManyMutationInput } from './transfer-out-transaction-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TransferOutTransactionWhereInput } from './transfer-out-transaction-where.input';

@ArgsType()
export class UpdateManyTransferOutTransactionArgs {

    @Field(() => TransferOutTransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => TransferOutTransactionUpdateManyMutationInput)
    data!: TransferOutTransactionUpdateManyMutationInput;

    @Field(() => TransferOutTransactionWhereInput, {nullable:true})
    @Type(() => TransferOutTransactionWhereInput)
    where?: TransferOutTransactionWhereInput;
}
