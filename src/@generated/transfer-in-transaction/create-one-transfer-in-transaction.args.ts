import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransferInTransactionCreateInput } from './transfer-in-transaction-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTransferInTransactionArgs {

    @Field(() => TransferInTransactionCreateInput, {nullable:false})
    @Type(() => TransferInTransactionCreateInput)
    data!: TransferInTransactionCreateInput;
}
