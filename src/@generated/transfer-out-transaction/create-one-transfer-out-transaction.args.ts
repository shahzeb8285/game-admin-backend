import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransferOutTransactionCreateInput } from './transfer-out-transaction-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTransferOutTransactionArgs {

    @Field(() => TransferOutTransactionCreateInput, {nullable:false})
    @Type(() => TransferOutTransactionCreateInput)
    data!: TransferOutTransactionCreateInput;
}
