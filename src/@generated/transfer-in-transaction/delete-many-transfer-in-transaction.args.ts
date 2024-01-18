import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransferInTransactionWhereInput } from './transfer-in-transaction-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTransferInTransactionArgs {

    @Field(() => TransferInTransactionWhereInput, {nullable:true})
    @Type(() => TransferInTransactionWhereInput)
    where?: TransferInTransactionWhereInput;
}
