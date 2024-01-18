import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransferInTransactionUpdateManyMutationInput } from './transfer-in-transaction-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TransferInTransactionWhereInput } from './transfer-in-transaction-where.input';

@ArgsType()
export class UpdateManyTransferInTransactionArgs {

    @Field(() => TransferInTransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => TransferInTransactionUpdateManyMutationInput)
    data!: TransferInTransactionUpdateManyMutationInput;

    @Field(() => TransferInTransactionWhereInput, {nullable:true})
    @Type(() => TransferInTransactionWhereInput)
    where?: TransferInTransactionWhereInput;
}
